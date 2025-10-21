from flask import jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app import app, db, bcrypt
from models import User, Food, Order


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({'error': 'Username or email already exists'}), 400

    hashed_pw = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(username=username, email=email, password=hashed_pw)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and bcrypt.check_password_hash(user.password, password):
        token = create_access_token(identity={'id': user.id, 'is_admin': user.is_admin})
        return jsonify({'message': 'Login successful', 'token': token}), 200

    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/users', methods=['GET'])
@jwt_required()
def view_all_users():
    user = get_jwt_identity()
    if not user['is_admin']:
        return jsonify({'error': 'Unauthorized'}), 403

    users = User.query.all()
    return jsonify([{
        'id': u.id,
        'username': u.username,
        'email': u.email,
        'is_admin': u.is_admin
    } for u in users]), 200

@app.route('/foods', methods=['POST'])
@jwt_required()
def add_food():
    user = get_jwt_identity()
    if not user or not user.get('is_admin'):
        return jsonify({'error': 'Unauthorized'}), 403

    data = request.get_json()
    name = data.get('name')
    price = data.get('price')

    if not name or price is None:
        return jsonify({'error': 'Name and price are required'}), 400

    food = Food(name=name, price=price)
    db.session.add(food)
    db.session.commit()

    return jsonify({'message': 'Food added successfully'}), 201

@app.route('/foods', methods=['GET'])
def get_foods():
    foods = Food.query.all()
    return jsonify([{
        'id': f.id,
        'name': f.name,
        'price': f.price,
        'available': f.available
    } for f in foods]), 200

@app.route('/order', methods=['POST'])
@jwt_required()
def place_order():
    user = get_jwt_identity()
    data = request.get_json()

    food = Food.query.get(data.get('food_id'))
    if not food or not food.available:
        return jsonify({'error': 'Food not available'}), 400

    quantity = data.get('quantity', 1)
    total_price = food.price * quantity

    order = Order(user_id=user['id'], food_id=food.id, quantity=quantity, total_price=total_price)
    db.session.add(order)
    db.session.commit()

    return jsonify({'message': 'Order placed successfully'}), 201

@app.route('/myorders', methods=['GET'])
@jwt_required()
def my_orders():
    user = get_jwt_identity()
    orders = Order.query.filter_by(user_id=user['id']).all()

    return jsonify([{
        'id': o.id,
        'food_name': o.food.name,
        'quantity': o.quantity,
        'total_price': o.total_price,
        'created_at': o.created_at.strftime('%Y-%m-%d %H:%M:%S')
    } for o in orders]), 200

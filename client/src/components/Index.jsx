import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Utensils, Trophy, Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  const heroImage = "/client/images/mchana-logo.jpg";
  const mchanaLogo = "/client/images/mchana-logo.jpg";

  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="gradient-text">Mchana</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Where Luxury Meets Competition – Experience World-Class Dining & Billiards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="text-lg px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/80 transition"
            >
              Explore Menu
            </Link>
            <Link
              to="/events"
              className="text-lg px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 cursor-pointer group">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Exquisite Dining</h3>
              <p className="text-muted-foreground mb-4">
                Savor gourmet cuisine crafted by award-winning chefs in our elegant restaurant.
              </p>
              <Link
                to="/menu"
                className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium"
              >
                View Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 cursor-pointer group">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Billiards Competitions</h3>
              <p className="text-muted-foreground mb-4">
                Join our prestigious pool tournaments and showcase your skills against the best.
              </p>
              <Link
                to="/events"
                className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 cursor-pointer group">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Exclusive Events</h3>
              <p className="text-muted-foreground mb-4">
                Host your special occasions in our premium event spaces with full-service catering.
              </p>
              <Link
                to="/contact"
                className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img
                src={mchanaLogo}
                alt="Fine dining at Mchana"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Culinary Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our menu features a perfect blend of international flavors and local favorites,
                prepared with the finest ingredients and presented with artistic flair.
              </p>
              <Link
                to="/menu"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition"
              >
                Browse Our Menu
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-4">Championship Billiards</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the thrill of competition on our professional-grade pool tables.
                Join weekly tournaments or practice your game in our exclusive lounge.
              </p>
              <Link
                to="/events"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition"
              >
                View Competitions
              </Link>
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <img
                src={mchanaLogo}
                alt="Billiards competition"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;

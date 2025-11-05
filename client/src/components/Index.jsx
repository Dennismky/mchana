import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Utensils, Trophy, Calendar, ArrowRight } from "lucide-react";

import heroImage from "../images/mchana.webp";
import fineDiningImage from "../images/fine-dining.jpeg";
import billiardsImage from "../images/billiards-competition.jpg";

const Index = () => {
  return (
    <div className="bg-[hsl(0,0%,100%)] dark:bg-[hsl(0,0%,10%)] text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,90%)] transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, imageRendering: "auto" }}
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
              className="px-6 py-3 bg-[hsl(0,72%,51%)] text-[hsl(0,0%,100%)] font-semibold rounded-lg shadow-elegant hover:bg-[hsl(0,72%,51%)/0.8] transition"
            >
              Explore Menu
            </Link>
            <Link
              to="/events"
              className="px-6 py-3 border border-[hsl(0,0%,90%)] dark:border-[hsl(0,0%,30%)] text-white bg-white/10 backdrop-blur-sm font-semibold rounded-lg hover:bg-white/20 transition"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[hsl(0,0%,100%)] dark:bg-[hsl(0,0%,10%)] transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,90%)]">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[hsl(0,0%,100%)] dark:bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,90%)] dark:border-[hsl(0,0%,30%)] rounded-2xl shadow-elegant p-6 hover-lift cursor-pointer group transition">
              <div className="mb-4 p-4 bg-[hsl(0,72%,51%)/0.1] rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[hsl(0,72%,51%)/0.2] transition">
                <Utensils className="h-8 w-8 text-[hsl(0,72%,51%)]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,90%)]">Exquisite Dining</h3>
              <p className="text-[hsl(0,0%,45%)] dark:text-[hsl(0,0%,60%)] mb-4">
                Savor gourmet cuisine crafted by award-winning chefs in our elegant restaurant.
              </p>
              <Link
                to="/menu"
                className="text-[hsl(0,72%,51%)] hover:text-[hsl(0,72%,51%)/0.8] inline-flex items-center gap-2 font-medium"
              >
                View Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-[hsl(0,0%,100%)] dark:bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,90%)] dark:border-[hsl(0,0%,30%)] rounded-2xl shadow-elegant p-6 hover-lift cursor-pointer group transition">
              <div className="mb-4 p-4 bg-[hsl(0,72%,51%)/0.1] rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[hsl(0,72%,51%)/0.2] transition">
                <Trophy className="h-8 w-8 text-[hsl(0,72%,51%)]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,90%)]">Billiards Competitions</h3>
              <p className="text-[hsl(0,0%,45%)] dark:text-[hsl(0,0%,60%)] mb-4">
                Join our prestigious pool tournaments and showcase your skills against the best.
              </p>
              <Link
                to="/events"
                className="text-[hsl(0,72%,51%)] hover:text-[hsl(0,72%,51%)/0.8] inline-flex items-center gap-2 font-medium"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-[hsl(0,0%,100%)] dark:bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,90%)] dark:border-[hsl(0,0%,30%)] rounded-2xl shadow-elegant p-6 hover-lift cursor-pointer group transition">
              <div className="mb-4 p-4 bg-[hsl(0,72%,51%)/0.1] rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[hsl(0,72%,51%)/0.2] transition">
                <Calendar className="h-8 w-8 text-[hsl(0,72%,51%)]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,90%)]">Exclusive Events</h3>
              <p className="text-[hsl(0,0%,45%)] dark:text-[hsl(0,0%,60%)] mb-4">
                Host your special occasions in our premium event spaces with full-service catering.
              </p>
              <Link
                to="/contact"
                className="text-[hsl(0,72%,51%)] hover:text-[hsl(0,72%,51%)/0.8] inline-flex items-center gap-2 font-medium"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6 bg-[hsl(0,0%,96%)/0.3] dark:bg-[hsl(0,0%,20%)/0.3] transition-colors duration-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img
                src={fineDiningImage}
                alt="Fine dining at Mchana"
                className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,90%)]">Culinary Excellence</h2>
              <p className="text-[hsl(0,0%,45%)] dark:text-[hsl(0,0%,60%)] mb-6">
                Our menu features a perfect blend of international flavors and local favorites,
                prepared with the finest ingredients and presented with artistic flair.
              </p>
              <Link
                to="/menu"
                className="bg-[hsl(0,72%,51%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(0,72%,51%)/0.8] transition"
              >
                Browse Our Menu
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-4 text-[hsl(0,0%,10%)] dark:text-[hsl(0,0%,90%)]">Championship Billiards</h2>
              <p className="text-[hsl(0,0%,45%)] dark:text-[hsl(0,0%,60%)] mb-6">
                Experience the thrill of competition on our professional-grade pool tables.
                Join weekly tournaments or practice your game in our exclusive lounge.
              </p>
              <Link
                to="/events"
                className="bg-[hsl(0,72%,51%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(0,72%,51%)/0.8] transition"
              >
                View Competitions
              </Link>
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <img
                src={billiardsImage}
                alt="Billiards competition"
                className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Index;

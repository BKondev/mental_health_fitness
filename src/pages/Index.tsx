
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SubscriptionCTA from "@/components/home/SubscriptionCTA";
import TestimonialSection from "@/components/home/TestimonialSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedPrograms />
        <SubscriptionCTA />
        <FeaturedProducts />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

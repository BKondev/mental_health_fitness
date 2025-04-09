
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-wellness-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-medium text-wellness-800 tracking-tight leading-tight">
              Transform Your Mind 
              <span className="block">and Body Through</span>
              <span className="text-wellness-600">Mindful Movement</span>
            </h1>
            <p className="text-lg text-wellness-600 max-w-xl mx-auto lg:mx-0">
              Join our holistic wellness community for daily yoga and fitness programs 
              that nurture your mental health and physical wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-wellness-500 hover:bg-wellness-600 text-white">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-wellness-400 text-wellness-700">
                Explore Programs
              </Button>
            </div>
          </div>
          
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
              alt="Woman practicing yoga in a peaceful setting" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-wellness-900/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

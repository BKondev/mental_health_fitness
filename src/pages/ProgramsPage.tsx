
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
  level: string;
}

const programs: Program[] = [
  {
    id: "1",
    title: "30-Day Yoga Challenge",
    description: "Transform your body and mind with our 30-day yoga challenge designed for all levels.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    price: "$49.99",
    duration: "30 days",
    level: "All levels"
  },
  {
    id: "2",
    title: "Mindful Meditation Series",
    description: "Learn to quiet your mind and find inner peace with our guided meditation program.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    price: "$29.99",
    duration: "14 days",
    level: "Beginner"
  },
  {
    id: "3",
    title: "Core Strength & Power",
    description: "Build a strong core and increase your overall power with this intensive workout program.",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    price: "$39.99",
    duration: "21 days",
    level: "Intermediate"
  },
  {
    id: "4",
    title: "Flexibility & Balance",
    description: "Improve your flexibility and balance with this specialized yoga and stretching program.",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    price: "$34.99",
    duration: "14 days",
    level: "All levels"
  },
  {
    id: "5",
    title: "Stress Relief & Relaxation",
    description: "Designed to help you manage stress and find relaxation in your busy life.",
    imageUrl: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    price: "$24.99",
    duration: "7 days",
    level: "All levels"
  },
  {
    id: "6",
    title: "Advanced Yoga Flow",
    description: "Take your yoga practice to the next level with our advanced flow sequences.",
    imageUrl: "https://images.unsplash.com/photo-1573590330099-d6c7355ec595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    price: "$59.99",
    duration: "28 days",
    level: "Advanced"
  }
];

const ProgramsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-sand-100 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-sand-900">Our Wellness Programs</h1>
            <p className="text-xl text-sand-700 max-w-2xl mx-auto">
              Transform your body and mind with our carefully crafted fitness and wellness programs designed for all levels.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-sand-800">All Programs</h2>
                <p className="text-sand-600">Find the perfect program for your wellness journey</p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center space-x-2">
                <select className="border border-sand-300 rounded-md px-3 py-2 bg-white text-sand-800 text-sm">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <select className="border border-sand-300 rounded-md px-3 py-2 bg-white text-sand-800 text-sm">
                  <option>Sort: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Shortest</option>
                  <option>Duration: Longest</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="overflow-hidden border-sand-200 hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={program.imageUrl} 
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-sand-800">{program.title}</h3>
                      <span className="text-sand-800 font-medium">{program.price}</span>
                    </div>
                    <p className="text-sand-600 mb-4 line-clamp-2">{program.description}</p>
                    <div className="flex justify-between items-center text-sm text-sand-600 mb-4">
                      <span>{program.duration}</span>
                      <span>{program.level}</span>
                    </div>
                    <Button className="w-full bg-sand-500 hover:bg-sand-600">
                      View Program Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="mx-auto flex items-center text-sand-700 border-sand-300">
                Load More Programs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;


import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  duration: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  duration,
}) => {
  return (
    <Card className="overflow-hidden border-wellness-100 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-2 right-2 bg-wellness-500 text-white px-2 py-1 text-xs rounded-full">
          {duration}
        </div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="font-medium text-xl text-wellness-800 mb-2">{title}</h3>
        <p className="text-wellness-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Link to={link} className="group inline-flex items-center text-wellness-600 hover:text-wellness-800 transition-smooth">
          <span>View Program</span>
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};

const FeaturedPrograms: React.FC = () => {
  const programs = [
    {
      title: "Morning Flow Yoga",
      description: "Start your day with gentle movements to awaken your body and calm your mind.",
      imageUrl: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/programs/morning-flow",
      duration: "20 min",
    },
    {
      title: "Stress Relief Meditation",
      description: "Guided meditation practices to reduce anxiety and cultivate inner peace.",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/programs/stress-relief",
      duration: "15 min",
    },
    {
      title: "Full Body Strength",
      description: "Build functional strength and improve posture with low-impact exercises.",
      imageUrl: "https://images.unsplash.com/photo-1518609571773-39b7d303a87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/programs/full-body",
      duration: "30 min",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-wellness-800 mb-4">
            Featured Programs
          </h2>
          <p className="text-wellness-600 max-w-xl mx-auto">
            Discover our most popular wellness programs designed to strengthen your body,
            calm your mind, and nourish your spirit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-wellness-500 hover:bg-wellness-600">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;

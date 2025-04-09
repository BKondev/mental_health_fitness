
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubscriptionCTA: React.FC = () => {
  const benefits = [
    "Access to daily workout videos",
    "Track your progress with our calendar",
    "New content added weekly",
    "Community support and motivation",
    "Access on any device",
  ];

  return (
    <section className="py-16 bg-wellness-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-4">
            Transform Your Life with a Premium Subscription
          </h2>
          <p className="text-wellness-100 mb-8 text-lg">
            Join our community and get unlimited access to all our yoga and fitness programs, 
            guided meditations, and exclusive content.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="bg-wellness-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Monthly Subscription</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$19.99</span>
                <span className="text-wellness-200">/month</span>
              </div>
              <ul className="space-y-2 text-left mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={18} className="text-wellness-300 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-white text-wellness-800 hover:bg-wellness-100">
                Subscribe Monthly
              </Button>
            </div>
            
            <div className="bg-wellness-600 p-6 rounded-lg border-2 border-wellness-300">
              <div className="bg-wellness-500 text-white text-sm py-1 px-3 rounded-full inline-block mb-2">
                BEST VALUE
              </div>
              <h3 className="text-xl font-medium mb-4">Annual Subscription</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$199.99</span>
                <span className="text-wellness-200">/year</span>
              </div>
              <ul className="space-y-2 text-left mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={18} className="text-wellness-300 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="text-wellness-200 text-sm mb-3">
                Save $40 compared to monthly subscription
              </div>
              <Button size="lg" className="w-full bg-white text-wellness-800 hover:bg-wellness-100">
                Subscribe Yearly
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-wellness-200">
            Cancel anytime. No hidden fees. Satisfaction guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;

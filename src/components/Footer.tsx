
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="bg-sand-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-lg text-sand-800 mb-4">
              Mental Health Fitness
            </h3>
            <p className="text-sand-600 mb-4 text-sm">
              Holistic wellness for mind, body, and spirit through yoga, fitness, and natural products.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" aria-label="Instagram" className="text-sand-700 hover:text-sand-900 transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-sand-700 hover:text-sand-900 transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-sand-700 hover:text-sand-900 transition-smooth">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-sand-700 hover:text-sand-900 transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-sand-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-sand-800 mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop/mala" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Mala Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop/supplements" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Dietary Supplements
                </Link>
              </li>
              <li>
                <Link to="/kangen" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Kangen Water Machines
                </Link>
              </li>
              <li>
                <Link to="/shop/training" className="text-sand-600 hover:text-sand-900 transition-smooth">
                  Training Programs
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-sand-800 mb-4">Newsletter</h3>
            <p className="text-sand-600 mb-4 text-sm">
              Sign up to receive updates and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="border-sand-300 focus:border-sand-500"
              />
              <Button className="bg-sand-500 hover:bg-sand-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sand-200 mt-10 pt-6 text-center text-sm text-sand-500">
          <p>© {new Date().getFullYear()} Mental Health Fitness. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-sand-700 transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-sand-700 transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-semibold text-sand-800">
                Mental Health Fitness
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/programs"
                className="text-sand-700 hover:text-sand-900 transition-smooth"
              >
                Programs
              </Link>
              <Link
                to="/shop"
                className="text-sand-700 hover:text-sand-900 transition-smooth"
              >
                Shop
              </Link>
              <Link
                to="/calendar"
                className="text-sand-700 hover:text-sand-900 transition-smooth"
              >
                Calendar
              </Link>
              <Link
                to="/kangen"
                className="text-sand-700 hover:text-sand-900 transition-smooth"
              >
                Kangen Water
              </Link>
              <Link
                to="/contact"
                className="text-sand-700 hover:text-sand-900 transition-smooth"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/shop/cart">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
            <Button className="bg-sand-500 hover:bg-sand-600">
              Subscribe
            </Button>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-sand-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            <Link
              to="/programs"
              className="block py-2 text-sand-700 hover:text-sand-900"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-sand-700 hover:text-sand-900"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/calendar"
              className="block py-2 text-sand-700 hover:text-sand-900"
              onClick={toggleMenu}
            >
              Calendar
            </Link>
            <Link
              to="/kangen"
              className="block py-2 text-sand-700 hover:text-sand-900"
              onClick={toggleMenu}
            >
              Kangen Water
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sand-700 hover:text-sand-900"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-4 flex space-x-2">
              <Button variant="outline" size="sm" asChild className="w-1/2">
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-1/2">
                <Link to="/register">Register</Link>
              </Button>
            </div>
            <div className="pt-2 flex space-x-2">
              <Button variant="outline" size="sm" className="w-1/2">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart
              </Button>
              <Button variant="outline" size="sm" asChild className="w-1/2">
                <Link to="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
            </div>
            <Button className="w-full mt-2 bg-sand-500 hover:bg-sand-600">
              Subscribe
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

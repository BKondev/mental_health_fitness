
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, we would handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-medium text-sand-800 mb-4">
              Contact Us
            </h1>
            <p className="text-sand-600 max-w-xl mx-auto">
              We'd love to hear from you! Whether you have a question about our programs, products, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-sand-100">
              <h2 className="text-xl font-medium text-sand-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="border-sand-200 focus:border-sand-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-sand-200 focus:border-sand-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="border-sand-200 focus:border-sand-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    className="border-sand-200 focus:border-sand-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide as much detail as possible..."
                    className="min-h-[150px] border-sand-200 focus:border-sand-400"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-sand-500 hover:bg-sand-600">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-sand-50 rounded-lg shadow-sm p-6 border border-sand-100 mb-6">
                <h2 className="text-xl font-medium text-sand-800 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-sand-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-sand-700">Email</h3>
                      <p className="text-sand-600">info@mentalhealthfitness.com</p>
                      <p className="text-sand-600">support@mentalhealthfitness.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-sand-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-sand-700">Phone</h3>
                      <p className="text-sand-600">+1 (555) 123-4567</p>
                      <p className="text-sand-600">Mon-Fri, 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-sand-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-sand-700">Location</h3>
                      <p className="text-sand-600">123 Wellness Street</p>
                      <p className="text-sand-600">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-sand-50 rounded-lg shadow-sm p-6 border border-sand-100">
                <h2 className="text-xl font-medium text-sand-800 mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-sand-500 mr-2" />
                    <span className="text-sand-700">Customer Service Hours:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sand-600 ml-6">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 5:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 2:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                  <p className="text-sand-500 text-sm mt-3">
                    * Response time for emails is typically within 24-48 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-sand-100">
              <h2 className="text-xl font-medium text-sand-800 mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-sand-700 mb-2">How do I access my purchased programs?</h3>
                  <p className="text-sand-600">After purchase, you can access all your programs in your account dashboard under "My Programs" section.</p>
                </div>
                <div>
                  <h3 className="font-medium text-sand-700 mb-2">What is your return policy?</h3>
                  <p className="text-sand-600">We offer a 30-day money-back guarantee on all digital products. Physical products must be returned unused within 14 days.</p>
                </div>
                <div>
                  <h3 className="font-medium text-sand-700 mb-2">Can I gift a subscription to someone?</h3>
                  <p className="text-sand-600">Yes! You can purchase gift subscriptions for any duration from our shop section.</p>
                </div>
                <div>
                  <h3 className="font-medium text-sand-700 mb-2">How do I cancel my subscription?</h3>
                  <p className="text-sand-600">You can cancel your subscription anytime from your account settings. Your access will remain until the end of your billing period.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

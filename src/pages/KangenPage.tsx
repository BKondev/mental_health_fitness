
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Download, Upload, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const KangenPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-sand-100 to-white py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-semibold text-sand-900 mb-6">Experience the Power of Kangen Water®</h1>
                <p className="text-lg text-sand-700 mb-6">
                  Transform your hydration with Enagic's revolutionary Kangen Water® machines. 
                  Discover the benefits of hydrogen-rich, ionized alkaline water for your wellness journey.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-sand-500 mt-0.5 mr-2" />
                    <p className="text-sand-700">Medical-grade technology from Japan</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-sand-500 mt-0.5 mr-2" />
                    <p className="text-sand-700">Creates 5 different types of water for various uses</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-sand-500 mt-0.5 mr-2" />
                    <p className="text-sand-700">Top-quality materials and industry-leading warranty</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-sand-500 hover:bg-sand-600">
                    Request Information
                  </Button>
                  <Button variant="outline" className="border-sand-300 text-sand-700">
                    Watch Demo Video
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1559766751-1f54758d6fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Kangen Water Machine"
                  className="rounded-lg shadow-lg max-w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-sand-800 mb-4">Our Kangen Water® Machine Models</h2>
              <p className="text-sand-600 max-w-2xl mx-auto">
                Explore our range of Enagic's Kangen Water® machines to find the perfect fit for your home or business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-sand-200">
                <CardContent className="p-6 flex flex-col">
                  <div className="aspect-[4/3] mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1576078747782-3ddb28ed2799?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="K8 Machine"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-sand-800 mb-2">Kangen K8</h3>
                  <p className="text-sand-500 font-medium mb-2">$4,980.00</p>
                  <p className="text-sand-600 mb-4 flex-grow">
                    Our flagship model with 8 titanium-platinum-coated electrode plates for maximum ionization potential.
                  </p>
                  <Button className="w-full bg-sand-500 hover:bg-sand-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-sand-200">
                <CardContent className="p-6 flex flex-col">
                  <div className="aspect-[4/3] mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1567428051128-247f516033a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="SD501 Machine"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-sand-800 mb-2">Kangen SD501</h3>
                  <p className="text-sand-500 font-medium mb-2">$3,980.00</p>
                  <p className="text-sand-600 mb-4 flex-grow">
                    The classic model with proven performance and reliability. Perfect for families of all sizes.
                  </p>
                  <Button className="w-full bg-sand-500 hover:bg-sand-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-sand-200">
                <CardContent className="p-6 flex flex-col">
                  <div className="aspect-[4/3] mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Leveluk R Machine"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-sand-800 mb-2">Leveluk R</h3>
                  <p className="text-sand-500 font-medium mb-2">$2,980.00</p>
                  <p className="text-sand-600 mb-4 flex-grow">
                    Our entry-level machine with all the essential features to get started with Kangen Water®.
                  </p>
                  <Button className="w-full bg-sand-500 hover:bg-sand-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-sand-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-sand-800 mb-4">Request Information</h2>
              <p className="text-sand-600 max-w-2xl mx-auto">
                Interested in learning more about our Kangen Water® machines? Fill out the form below and one of our specialists will contact you.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-sand-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" className="border-sand-200" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" className="border-sand-200" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="border-sand-200" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" className="border-sand-200" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in</Label>
                  <select id="interest" className="w-full border border-sand-200 rounded-md h-10 px-3 text-sand-800">
                    <option value="">Please select...</option>
                    <option value="k8">Kangen K8</option>
                    <option value="sd501">Kangen SD501</option>
                    <option value="leveluk-r">Leveluk R</option>
                    <option value="general">General Information</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    className="min-h-[120px] border-sand-200" 
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-sand-300" />
                    <span className="text-sand-700 text-sm">
                      I consent to receive marketing communications and can unsubscribe at any time
                    </span>
                  </Label>
                </div>
                
                <div className="space-y-2">
                  <Label className="flex items-start gap-2">
                    <input type="checkbox" className="rounded border-sand-300 mt-1" />
                    <span className="text-sand-700 text-sm">
                      I understand that by submitting this form, I agree to the processing of my personal data as described in the 
                      <a href="/privacy" className="text-sand-500 hover:text-sand-700 underline mx-1">Privacy Policy</a>
                    </span>
                  </Label>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="document" className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-sand-500" />
                    <span>Upload Documentation (Optional)</span>
                  </Label>
                  <Input id="document" type="file" className="border-sand-200" />
                  <p className="text-xs text-sand-500">
                    You may upload any relevant documentation that might help us better understand your needs (Max 5MB, PDF or images)
                  </p>
                </div>
                
                <Button type="submit" className="w-full bg-sand-500 hover:bg-sand-600">
                  Request Information
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-sand-800 mb-4">Benefits of Kangen Water®</h2>
              <p className="text-sand-600 max-w-2xl mx-auto">
                Discover how Kangen Water® can transform your daily hydration and enhance your wellness journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-sand-50 p-6 rounded-lg border border-sand-200">
                <ShieldCheck className="h-10 w-10 text-sand-500 mb-4" />
                <h3 className="text-xl font-medium text-sand-800 mb-2">Optimal Hydration</h3>
                <p className="text-sand-600">
                  Micro-clustered water molecules may allow for better cellular hydration and nutrient absorption.
                </p>
              </div>
              
              <div className="bg-sand-50 p-6 rounded-lg border border-sand-200">
                <ShieldCheck className="h-10 w-10 text-sand-500 mb-4" />
                <h3 className="text-xl font-medium text-sand-800 mb-2">Antioxidant Properties</h3>
                <p className="text-sand-600">
                  Kangen Water® contains free electrons that can donate to active oxygen to help neutralize free radicals.
                </p>
              </div>
              
              <div className="bg-sand-50 p-6 rounded-lg border border-sand-200">
                <ShieldCheck className="h-10 w-10 text-sand-500 mb-4" />
                <h3 className="text-xl font-medium text-sand-800 mb-2">pH Balance</h3>
                <p className="text-sand-600">
                  Helps maintain optimal pH levels in the body, supporting overall wellness and vitality.
                </p>
              </div>
              
              <div className="bg-sand-50 p-6 rounded-lg border border-sand-200">
                <ShieldCheck className="h-10 w-10 text-sand-500 mb-4" />
                <h3 className="text-xl font-medium text-sand-800 mb-2">Multiple Water Types</h3>
                <p className="text-sand-600">
                  Creates various water types for different uses: drinking, cooking, beauty, cleaning, and sanitizing.
                </p>
              </div>
              
              <div className="bg-sand-50 p-6 rounded-lg border border-sand-200">
                <ShieldCheck className="h-10 w-10 text-sand-500 mb-4" />
                <h3 className="text-xl font-medium text-sand-800 mb-2">Eco-Friendly</h3>
                <p className="text-sand-600">
                  Reduces plastic waste by eliminating the need for bottled water while providing superior hydration.
                </p>
              </div>
              
              <div className="bg-sand-50 p-6 rounded-lg border border-sand-200">
                <ShieldCheck className="h-10 w-10 text-sand-500 mb-4" />
                <h3 className="text-xl font-medium text-sand-800 mb-2">Long-Term Investment</h3>
                <p className="text-sand-600">
                  Built with durable, high-quality materials and backed by an industry-leading warranty for peace of mind.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-sand-500 hover:bg-sand-600">
                <Download className="h-4 w-4 mr-2" />
                Download Our Free Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KangenPage;

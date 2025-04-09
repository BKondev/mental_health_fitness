
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Filter, Grid3X3, List, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Chakra Mala Necklace",
    category: "Jewelry",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1612034818580-620d37ee0a37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "2",
    name: "Lotus Mala Bracelet",
    category: "Jewelry",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1613305159023-5616fc91dedc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "3",
    name: "Organic Multivitamin",
    category: "Supplements",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1559798824-deb9675782d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "4",
    name: "Digestive Enzyme Complex",
    category: "Supplements",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "5",
    name: "30-Day Yoga Program",
    category: "Training",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "6",
    name: "Kangen K8 Water Machine",
    category: "Kangen",
    price: 4980.00,
    image: "https://images.unsplash.com/photo-1613659615228-8a957c2a7f3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "7",
    name: "Meditation Mala Beads",
    category: "Jewelry",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1627397075868-9215937882e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "8",
    name: "Vitamin D3 & K2 Complex",
    category: "Supplements",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
];

const ShopPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Jewelry", "Supplements", "Training", "Kangen"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-sand-100 py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-sand-900 text-center mb-4">Shop Our Collection</h1>
            <p className="text-sand-700 text-center max-w-2xl mx-auto">
              Browse our carefully curated selection of wellness products, from mala jewelry and dietary supplements to training programs and Kangen water machines.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full md:w-64 shrink-0">
                <div className="border border-sand-200 rounded-lg p-5 sticky top-24">
                  <div className="mb-6">
                    <h3 className="text-sand-800 font-medium mb-3 flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category}
                          className={`block w-full text-left py-2 px-3 rounded-md transition-colors ${
                            selectedCategory === category
                              ? "bg-sand-100 text-sand-800 font-medium"
                              : "text-sand-600 hover:bg-sand-50"
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sand-800 font-medium mb-3">Price Range</h3>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        placeholder="Min" 
                        className="w-full p-2 border border-sand-200 rounded-md text-sm"
                      />
                      <span className="text-sand-400">-</span>
                      <input 
                        type="number" 
                        placeholder="Max" 
                        className="w-full p-2 border border-sand-200 rounded-md text-sm"
                      />
                    </div>
                    <Button className="w-full mt-3 bg-sand-500 hover:bg-sand-600">Apply</Button>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sand-700">Showing {filteredProducts.length} products</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-sand-200 rounded-md overflow-hidden">
                      <button
                        className={`p-2 ${viewMode === 'grid' ? 'bg-sand-100' : 'bg-white'}`}
                        onClick={() => setViewMode('grid')}
                        aria-label="Grid view"
                      >
                        <Grid3X3 className="h-5 w-5 text-sand-600" />
                      </button>
                      <button
                        className={`p-2 ${viewMode === 'list' ? 'bg-sand-100' : 'bg-white'}`}
                        onClick={() => setViewMode('list')}
                        aria-label="List view"
                      >
                        <List className="h-5 w-5 text-sand-600" />
                      </button>
                    </div>
                    <select className="border border-sand-200 rounded-md p-2 bg-white text-sand-700">
                      <option>Sort: Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest First</option>
                    </select>
                  </div>
                </div>

                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <Card key={product.id} className="overflow-hidden border-sand-200 hover:shadow-md transition-shadow">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="mb-2">
                            <span className="text-sm text-sand-500">{product.category}</span>
                            <h3 className="font-medium text-sand-800">{product.name}</h3>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sand-900">${product.price.toFixed(2)}</span>
                            <Button size="sm" className="bg-sand-500 hover:bg-sand-600">
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProducts.map(product => (
                      <Card key={product.id} className="overflow-hidden border-sand-200 hover:shadow-md transition-shadow">
                        <div className="flex">
                          <div className="w-32 sm:w-48">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="flex-1 p-4 flex flex-col justify-between">
                            <div>
                              <span className="text-sm text-sand-500">{product.category}</span>
                              <h3 className="font-medium text-sand-800 mb-2">{product.name}</h3>
                              <p className="text-sand-600 text-sm hidden sm:block">
                                High-quality product designed for your wellness journey.
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <span className="font-medium text-sand-900">${product.price.toFixed(2)}</span>
                              <Button size="sm" className="bg-sand-500 hover:bg-sand-600">
                                <ShoppingCart className="h-4 w-4 mr-1" />
                                Add to Cart
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;


import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  category,
  slug,
}) => {
  return (
    <Card className="overflow-hidden border-wellness-100 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden group">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute top-2 left-2 bg-sand-50 text-wellness-800 px-2 py-1 text-xs rounded-full">
          {category}
        </div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="font-medium text-wellness-800">{name}</h3>
        <p className="text-wellness-600 font-medium mt-1">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-4 flex justify-between">
        <Link to={`/shop/${slug}`} className="text-wellness-600 hover:text-wellness-800 text-sm transition-smooth">
          View Details
        </Link>
        <Button variant="outline" size="sm" className="rounded-full">
          <ShoppingCart size={14} className="mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      name: "Wellness Mala Beads",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      category: "Jewelry",
      slug: "wellness-mala-beads",
    },
    {
      name: "Organic Vitamin D3 Supplement",
      price: 28.50,
      imageUrl: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      category: "Supplements",
      slug: "vitamin-d3",
    },
    {
      name: "30-Day Mindful Movement Guide",
      price: 19.99,
      imageUrl: "https://images.unsplash.com/photo-1598520106830-8c45c2417d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      category: "Training",
      slug: "mindful-movement-guide",
    },
    {
      name: "Kangen K8 Water Machine",
      price: 1999.00,
      imageUrl: "https://images.unsplash.com/photo-1612803155902-33b49a2496e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      category: "Kangen Water",
      slug: "kangen-k8",
    }
  ];

  return (
    <section className="py-16 bg-wellness-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-wellness-800 mb-4">
            Shop Our Products
          </h2>
          <p className="text-wellness-600 max-w-xl mx-auto">
            Enhance your wellness journey with our carefully selected products 
            to support your mind, body, and spirit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-wellness-500 hover:bg-wellness-600">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

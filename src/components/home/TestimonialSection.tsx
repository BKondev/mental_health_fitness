
import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  imageUrl,
  rating,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-wellness-100">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-wellness-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={author}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h4 className="font-medium text-wellness-800">{author}</h4>
          <p className="text-sm text-wellness-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Mental Health Fitness has completely transformed my approach to wellness. The daily yoga practices have helped my anxiety tremendously.",
      author: "Sarah Johnson",
      role: "Member for 1 year",
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
    },
    {
      quote: "I've tried many fitness platforms, but nothing compares to the mindfulness approach here. I feel stronger physically and mentally.",
      author: "Michael Wong",
      role: "Member for 8 months",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      quote: "The Kangen water machine I purchased through Mental Health Fitness has been life-changing for my entire family's hydration habits.",
      author: "Lisa Patel",
      role: "Member for 2 years",
      imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-wellness-800 mb-4">
            What Our Community Says
          </h2>
          <p className="text-wellness-600 max-w-xl mx-auto">
            Join thousands of members who have transformed their lives through our
            holistic approach to wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

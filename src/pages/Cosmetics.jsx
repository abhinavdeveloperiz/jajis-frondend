import { useEffect, useState } from "react";
import axios from "axios";

export default function Cosmetics() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/pages/cosmetics/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching cosmetics data:", err);
        setError("Failed to load cosmetics page data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {data.page || "Cosmetics"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.content || "Premium beauty products for your perfect look"}
            </p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Beauty Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Makeup",
              icon: "💄",
              description: "Professional makeup products",
              products: ["Foundation", "Concealer", "Lipstick", "Eyeshadow", "Mascara", "Blush"]
            },
            {
              title: "Skincare",
              icon: "🧴",
              description: "Nourishing skincare essentials",
              products: ["Cleanser", "Moisturizer", "Serum", "Sunscreen", "Face Mask", "Toner"]
            },
            {
              title: "Hair Care",
              icon: "🧴",
              description: "Complete hair care solutions",
              products: ["Shampoo", "Conditioner", "Hair Oil", "Styling Products", "Hair Mask", "Serum"]
            },
            {
              title: "Fragrances",
              icon: "🌸",
              description: "Luxury perfumes and fragrances",
              products: ["Women's Perfume", "Men's Cologne", "Body Mist", "Room Fragrance", "Gift Sets"]
            },
            {
              title: "Tools & Accessories",
              icon: "🪞",
              description: "Professional beauty tools",
              products: ["Makeup Brushes", "Mirrors", "Hair Dryers", "Straighteners", "Curling Irons"]
            },
            {
              title: "Bath & Body",
              icon: "🛁",
              description: "Luxurious bath and body care",
              products: ["Body Wash", "Body Lotion", "Hand Cream", "Foot Care", "Bath Salts", "Soaps"]
            }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{category.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{category.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                    {product}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Premium Foundation", price: "$45", image: "🎨" },
              { name: "Luxury Lipstick", price: "$28", image: "💋" },
              { name: "Anti-Aging Serum", price: "$65", image: "✨" },
              { name: "Signature Perfume", price: "$89", image: "🌸" }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-6xl mb-4">{product.image}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-purple-600 font-bold text-xl">{product.price}</p>
                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Discover Your Perfect Beauty Routine
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Shop our premium collection of beauty products and transform your daily routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

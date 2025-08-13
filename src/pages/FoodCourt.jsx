import { useEffect, useState } from "react";
import axios from "axios";

export default function FoodCourt() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/pages/food-court/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching food court data:", err);
        setError("Failed to load food court page data");
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
              {data.page || "Food Court"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.content || "Delicious dining options for every taste"}
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Restaurants
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Italian Delight",
              icon: "🍝",
              cuisine: "Italian",
              description: "Authentic Italian pasta and pizza",
              specialties: ["Margherita Pizza", "Spaghetti Carbonara", "Tiramisu", "Bruschetta"]
            },
            {
              name: "Spice Garden",
              icon: "🌶️",
              cuisine: "Indian",
              description: "Traditional Indian cuisine with modern twists",
              specialties: ["Butter Chicken", "Biryani", "Naan Bread", "Gulab Jamun"]
            },
            {
              name: "Sushi Master",
              icon: "🍣",
              cuisine: "Japanese",
              description: "Fresh sushi and Japanese delicacies",
              specialties: ["California Roll", "Sashimi", "Miso Soup", "Tempura"]
            },
            {
              name: "Burger House",
              icon: "🍔",
              cuisine: "American",
              description: "Juicy burgers and comfort food",
              specialties: ["Classic Burger", "Chicken Wings", "French Fries", "Milkshakes"]
            },
            {
              name: "Noodle Paradise",
              icon: "🍜",
              cuisine: "Chinese",
              description: "Authentic Chinese noodles and dim sum",
              specialties: ["Kung Pao Chicken", "Dim Sum", "Fried Rice", "Sweet & Sour"]
            },
            {
              name: "Dessert Corner",
              icon: "🍰",
              cuisine: "Desserts",
              description: "Sweet treats and beverages",
              specialties: ["Chocolate Cake", "Ice Cream", "Smoothies", "Coffee"]
            }
          ].map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{restaurant.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{restaurant.name}</h3>
              <div className="text-center mb-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {restaurant.cuisine}
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-center">{restaurant.description}</p>
              <div className="space-y-2">
                {restaurant.specialties.map((specialty, specialtyIndex) => (
                  <div key={specialtyIndex} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded">
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Food Court Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Multiple Cuisines", icon: "🍽️", description: "Variety of food options" },
              { name: "Clean Environment", icon: "✨", description: "Hygienic dining spaces" },
              { name: "Quick Service", icon: "⚡", description: "Fast food preparation" },
              { name: "Affordable Prices", icon: "💰", description: "Budget-friendly meals" },
              { name: "Seating Area", icon: "🪑", description: "Comfortable dining space" },
              { name: "Takeaway Service", icon: "📦", description: "Food to go options" },
              { name: "Payment Options", icon: "💳", description: "Multiple payment methods" },
              { name: "Family Friendly", icon: "👨‍👩‍👧‍👦", description: "Suitable for all ages" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Hungry? Come Visit Us!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience a world of flavors in our diverse food court.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              View Menu
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

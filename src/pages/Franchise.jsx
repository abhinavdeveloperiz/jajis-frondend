import { useEffect, useState } from "react";
import axios from "axios";

export default function Franchise() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/pages/franchise/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching franchise data:", err);
        setError("Failed to load franchise page data");
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
              {data.page || "Franchise"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.content || "Join our successful franchise network"}
            </p>
          </div>
        </div>
      </div>

      {/* Franchise Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Franchise Opportunities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Beauty Salon",
              icon: "💇‍♀️",
              investment: "$50K - $100K",
              description: "Complete beauty salon franchise",
              benefits: ["Brand Recognition", "Training Support", "Marketing Materials", "Equipment"]
            },
            {
              title: "Cosmetics Store",
              icon: "💄",
              investment: "$30K - $80K",
              description: "Premium cosmetics retail franchise",
              benefits: ["Product Supply", "Store Design", "Staff Training", "Inventory Management"]
            },
            {
              title: "Event Hall",
              icon: "🎉",
              investment: "$100K - $200K",
              description: "Event venue and catering franchise",
              benefits: ["Venue Setup", "Catering Services", "Event Planning", "Staff Support"]
            },
            {
              title: "Food Court",
              icon: "🍽️",
              investment: "$80K - $150K",
              description: "Multi-cuisine food court franchise",
              benefits: ["Kitchen Setup", "Menu Planning", "Staff Training", "Quality Control"]
            },
            {
              title: "Designing Studio",
              icon: "👗",
              investment: "$40K - $90K",
              description: "Fashion design and tailoring franchise",
              benefits: ["Design Software", "Equipment", "Fabric Supply", "Training"]
            },
            {
              title: "Academy",
              icon: "🎓",
              investment: "$60K - $120K",
              description: "Beauty and fashion training academy",
              benefits: ["Curriculum", "Teaching Materials", "Certification", "Placement Support"]
            }
          ].map((franchise, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{franchise.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{franchise.title}</h3>
              <div className="text-center mb-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {franchise.investment}
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-center">{franchise.description}</p>
              <ul className="space-y-2">
                {franchise.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-purple-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Franchise With Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Franchise With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Proven Success", icon: "📈", description: "Established business model" },
              { name: "Brand Recognition", icon: "🏆", description: "Well-known brand name" },
              { name: "Training Support", icon: "🎓", description: "Comprehensive training programs" },
              { name: "Marketing Support", icon: "📢", description: "Marketing and advertising help" },
              { name: "Ongoing Support", icon: "🤝", description: "Continuous business support" },
              { name: "Quality Products", icon: "✨", description: "Premium products and services" },
              { name: "Technology", icon: "💻", description: "Modern business systems" },
              { name: "Growth Potential", icon: "🚀", description: "Expansion opportunities" }
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
            Ready to Own Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our franchise network and start your entrepreneurial journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

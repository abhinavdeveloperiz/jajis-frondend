import { useEffect, useState } from "react";
import axios from "axios";

export default function Salons() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/pages/salons/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching salons data:", err);
        setError("Failed to load salons page data");
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
              {data.page || "Salons"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.content || "Professional beauty services for every occasion"}
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Salon Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Hair Styling",
              icon: "💇‍♀️",
              description: "Professional haircuts, styling, and treatments",
              features: ["Haircuts", "Styling", "Treatments", "Extensions"]
            },
            {
              title: "Facial Care",
              icon: "✨",
              description: "Rejuvenating facials and skin treatments",
              features: ["Deep Cleansing", "Anti-aging", "Brightening", "Hydrating"]
            },
            {
              title: "Nail Art",
              icon: "💅",
              description: "Creative nail designs and manicures",
              features: ["Manicures", "Pedicures", "Nail Art", "Gel Polish"]
            },
            {
              title: "Makeup",
              icon: "💄",
              description: "Professional makeup for all occasions",
              features: ["Bridal Makeup", "Party Makeup", "Natural Look", "Glamour"]
            },
            {
              title: "Spa Treatments",
              icon: "🧖‍♀️",
              description: "Relaxing spa and wellness treatments",
              features: ["Massage", "Body Treatments", "Aromatherapy", "Relaxation"]
            },
            {
              title: "Hair Coloring",
              icon: "🎨",
              description: "Expert hair coloring and highlights",
              features: ["Highlights", "Lowlights", "Balayage", "Color Correction"]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-purple-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your appointment today and experience the best in beauty and wellness services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200">
              Book Appointment
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

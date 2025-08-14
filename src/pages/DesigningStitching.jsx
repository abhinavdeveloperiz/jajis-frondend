import { useEffect, useState } from "react";
import axios from "axios";

export default function DesigningStitching() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/designing-stitching/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching designing stitching data:", err);
        setError("Failed to load designing stitching page data");
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
              {data.page || "Designing & Stitching"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.content || "Custom designs and professional stitching services"}
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Design",
              icon: "🎨",
              description: "Personalized clothing designs",
              features: ["Consultation", "Sketching", "Color Selection", "Fabric Choice"]
            },
            {
              title: "Bridal Wear",
              icon: "👰",
              description: "Exclusive bridal collections",
              features: ["Wedding Dresses", "Bridal Lehengas", "Accessories", "Alterations"]
            },
            {
              title: "Party Wear",
              icon: "🎉",
              description: "Elegant party and occasion wear",
              features: ["Evening Gowns", "Cocktail Dresses", "Sarees", "Suits"]
            },
            {
              title: "Casual Wear",
              icon: "👕",
              description: "Comfortable everyday clothing",
              features: ["Tops", "Dresses", "Pants", "Kurtas"]
            },
            {
              title: "Alterations",
              icon: "✂️",
              description: "Professional fitting and alterations",
              features: ["Size Adjustments", "Hemming", "Darting", "Fitting"]
            },
            {
              title: "Embroidery",
              icon: "🧵",
              description: "Beautiful hand and machine embroidery",
              features: ["Zari Work", "Stone Work", "Sequins", "Beading"]
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

      {/* Process */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Discuss your requirements and preferences", icon: "💬" },
              { step: "2", title: "Design", description: "Create custom designs and select fabrics", icon: "✏️" },
              { step: "3", title: "Stitching", description: "Professional stitching and finishing", icon: "🧵" },
              { step: "4", title: "Fitting", description: "Final fitting and adjustments", icon: "👗" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <div className="text-4xl mb-4">{process.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Perfect Outfit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a consultation and let us bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

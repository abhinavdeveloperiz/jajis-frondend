import { useEffect, useState } from "react";
import axios from "axios";
import { FaCut, FaSpa, FaPaintBrush, FaMagic, FaHandsWash, FaPalette } from "react-icons/fa";

export default function Salons() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/salons/");
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
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-2">Oops!</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const services = [
    { title: "Hair Styling", icon: FaCut, description: "Professional haircuts, styling, and treatments", features: ["Haircuts", "Styling", "Treatments", "Extensions"] },
    { title: "Facial Care", icon: FaSpa, description: "Rejuvenating facials and skin treatments", features: ["Deep Cleansing", "Anti-aging", "Brightening", "Hydrating"] },
    { title: "Nail Art", icon: FaPaintBrush, description: "Creative nail designs and manicures", features: ["Manicures", "Pedicures", "Nail Art", "Gel Polish"] },
    { title: "Makeup", icon: FaMagic, description: "Professional makeup for all occasions", features: ["Bridal Makeup", "Party Makeup", "Natural Look", "Glamour"] },
    { title: "Spa Treatments", icon: FaHandsWash, description: "Relaxing spa and wellness treatments", features: ["Massage", "Body Treatments", "Aromatherapy", "Relaxation"] },
    { title: "Hair Coloring", icon: FaPalette, description: "Expert hair coloring and highlights", features: ["Highlights", "Lowlights", "Balayage", "Color Correction"] }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner Image with Overlay */}
      <div className="relative h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Salon Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.page || "Salons"}</h1>
          <p className="text-lg md:text-2xl max-w-2xl">{data.content || "Professional beauty services for every occasion"}</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Salon Services</h2>

        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-64 flex-shrink-0"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-700 mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="text-black mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white text-black py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8">
            Book your appointment today and experience the best in beauty and wellness services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200">
              Book Appointment
            </a>
            <a href="tel:+8527419635" className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-200">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function EventHall() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/event-hall/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching event hall data:", err);
        setError("Failed to load event hall page data");
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
              {data.page || "Event Hall"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.content || "Perfect venues for your special celebrations"}
            </p>
          </div>
        </div>
      </div>

      {/* Venue Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Event Venues
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Wedding Hall",
              icon: "💒",
              description: "Elegant wedding venues for your special day",
              capacity: "200-500 guests",
              features: ["Decoration", "Catering", "Music System", "Parking"]
            },
            {
              title: "Conference Hall",
              icon: "🏢",
              description: "Professional conference and meeting spaces",
              capacity: "50-300 attendees",
              features: ["AV Equipment", "WiFi", "Catering", "Projector"]
            },
            {
              title: "Birthday Party Hall",
              icon: "🎂",
              description: "Fun and vibrant birthday celebration spaces",
              capacity: "50-150 guests",
              features: ["Decoration", "Games", "Catering", "Music"]
            },
            {
              title: "Corporate Events",
              icon: "👔",
              description: "Professional corporate event venues",
              capacity: "100-400 attendees",
              features: ["AV Setup", "Catering", "WiFi", "Parking"]
            },
            {
              title: "Cultural Events",
              icon: "🎭",
              description: "Spaces for cultural performances and shows",
              capacity: "200-800 guests",
              features: ["Stage", "Lighting", "Sound System", "Green Rooms"]
            },
            {
              title: "Exhibition Hall",
              icon: "🎪",
              description: "Large exhibition and trade show spaces",
              capacity: "500-2000 visitors",
              features: ["Booth Space", "WiFi", "Catering", "Parking"]
            }
          ].map((venue, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{venue.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{venue.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{venue.description}</p>
              <div className="text-center mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {venue.capacity}
                </span>
              </div>
              <ul className="space-y-2">
                {venue.features.map((feature, featureIndex) => (
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

      {/* Amenities */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Venue Amenities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Catering Services", icon: "🍽️" },
              { name: "Audio/Visual Equipment", icon: "🎵" },
              { name: "Free WiFi", icon: "📶" },
              { name: "Parking Space", icon: "🚗" },
              { name: "Decoration Services", icon: "🎨" },
              { name: "Professional Staff", icon: "👥" },
              { name: "Climate Control", icon: "❄️" },
              { name: "Security Services", icon: "🔒" }
            ].map((amenity, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-2">{amenity.icon}</div>
                <p className="text-sm font-medium text-gray-800">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to book your perfect venue and make your event unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Book Venue
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

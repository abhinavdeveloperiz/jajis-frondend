import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({ images: [], content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/pages/home/");
        setData(response.data);
        
        // If no images from API, add sample images for testing
        if (!response.data.images || response.data.images.length === 0) {
          console.log("No images from API, using sample images for testing");
          setData({
            ...response.data,
            images: [
              {
                id: 1,
                image_url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop",
                title: "Beauty Salon"
              },
              {
                id: 2,
                image_url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop",
                title: "Cosmetics"
              },
              {
                id: 3,
                image_url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop",
                title: "Event Hall"
              }
            ]
          });
        }
      } catch (err) {
        console.error("Error fetching home data:", err);
        setError("Failed to load home page data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-rotate banner images
  useEffect(() => {
    if (data.images && data.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prev) => 
          prev === data.images.length - 1 ? 0 : prev + 1
        );
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [data.images]);

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
      {/* Hero Banner Section with Images */}
      {data.images && data.images.length > 0 ? (
        <div className="relative h-screen overflow-hidden">
          {/* Banner Images Slider */}
          {data.images.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBannerIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img.image_url}
                alt={`Banner ${img.id}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1920x1080?text=Banner+Image';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}

          {/* Banner Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                Welcome to {data.page || "Jajis"}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md">
                {data.content || "Your one-stop destination for beauty and lifestyle services"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                  Explore Services
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Banner Navigation Dots */}
          {data.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {data.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBannerIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentBannerIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Banner Navigation Arrows */}
          {data.images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentBannerIndex(prev => 
                  prev === 0 ? data.images.length - 1 : prev - 1
                )}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentBannerIndex(prev => 
                  prev === data.images.length - 1 ? 0 : prev + 1
                )}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              >
                →
              </button>
            </>
          )}
        </div>
      ) : (
        /* Fallback Hero Section when no images */
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to {data.page || "Jajis"}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {data.content || "Your one-stop destination for beauty and lifestyle services"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Explore Services
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          </div>
        </div>
      )}

      {/* Banner Images Gallery */}
      {data.images && data.images.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.images.map((img) => (
              <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={img.image_url} 
                  alt={`Banner ${img.id}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Banner Image {img.id}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services Preview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Salons", icon: "💇‍♀️", description: "Professional beauty services" },
              { title: "Cosmetics", icon: "💄", description: "Premium beauty products" },
              { title: "Event Hall", icon: "🎉", description: "Perfect venues for celebrations" },
              { title: "Food Court", icon: "🍽️", description: "Delicious dining options" },
            ].map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

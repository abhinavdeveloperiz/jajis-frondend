import { useEffect, useState } from "react";
import axios from "axios";

export default function Academy() {
  const [data, setData] = useState({ content: "", page: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/pages/academy/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching academy data:", err);
        setError("Failed to load academy page data");
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
              {data.page || "Academy"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {data.content || "Professional training and skill development"}
            </p>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Courses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Beauty & Makeup",
              icon: "💄",
              duration: "3 Months",
              description: "Professional makeup and beauty techniques",
              modules: ["Basic Makeup", "Bridal Makeup", "Hair Styling", "Skincare"]
            },
            {
              title: "Fashion Design",
              icon: "👗",
              duration: "6 Months",
              description: "Complete fashion design and garment making",
              modules: ["Pattern Making", "Draping", "Sewing", "Fashion Illustration"]
            },
            {
              title: "Hair Styling",
              icon: "💇‍♀️",
              duration: "4 Months",
              description: "Professional hair styling and treatments",
              modules: ["Hair Cutting", "Coloring", "Styling", "Treatments"]
            },
            {
              title: "Nail Art",
              icon: "💅",
              duration: "2 Months",
              description: "Creative nail art and manicure techniques",
              modules: ["Basic Manicure", "Nail Art", "Gel Polish", "Extensions"]
            },
            {
              title: "Spa & Wellness",
              icon: "🧖‍♀️",
              duration: "3 Months",
              description: "Spa treatments and wellness therapies",
              modules: ["Facial Treatments", "Body Massage", "Aromatherapy", "Wellness"]
            },
            {
              title: "Cosmetology",
              icon: "✨",
              duration: "1 Year",
              description: "Comprehensive beauty and wellness program",
              modules: ["Makeup", "Hair", "Skincare", "Business Skills"]
            }
          ].map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{course.title}</h3>
              <div className="text-center mb-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {course.duration}
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-center">{course.description}</p>
              <ul className="space-y-2">
                {course.modules.map((module, moduleIndex) => (
                  <li key={moduleIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-purple-500 mr-2">✓</span>
                    {module}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Academy?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Expert Instructors", icon: "👨‍🏫", description: "Industry professionals" },
              { name: "Practical Training", icon: "🛠️", description: "Hands-on experience" },
              { name: "Certification", icon: "📜", description: "Recognized certificates" },
              { name: "Job Placement", icon: "💼", description: "Career assistance" },
              { name: "Modern Equipment", icon: "⚙️", description: "Latest tools and technology" },
              { name: "Small Batches", icon: "👥", description: "Personal attention" },
              { name: "Flexible Schedule", icon: "⏰", description: "Convenient timings" },
              { name: "Affordable Fees", icon: "💰", description: "Competitive pricing" }
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
            Start Your Career in Beauty & Fashion
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our academy and learn from the best in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Enroll Now
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

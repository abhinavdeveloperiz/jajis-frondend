import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FaMapMarkerAlt } from "react-icons/fa";

import BgImage from "../assets/images/saloon_bg.jpg";

export default function Salons() {
  const [data, setData] = useState({ page: "", banner_image: "", data: [] });
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

  return (
    <div
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          data.banner_image ||
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=2069&q=80"
        })`,
      }}
    >
      {/* Banner Section */}
      <div className="relative h-[400px] w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {data.page || "Salons"}
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Professional beauty services for every occasion
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-16 px-6 bg-black/90">
        <h2 className="text-3xl font-bold text-center mb-8">About Jajis</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          {/* Left: Image */}
          <div className="flex-1" data-aos="fade-right">
            <img
              src="https://cdn1.treatwell.net/images/view/v2.i5059485.w720.h480.xEC74D084/"
              alt="about"
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1 text-left" data-aos="fade-down">
            <p className="text-white text-justify mb-2">
              Welcome to Jaji’s Innovation – a name synonymous with beauty,
              creativity, and excellence. Founded in the heart of Kerala by the
              visionary Dr. K Jajimole, our brand has been redefining the
              standards of beauty and wellness since its inception in December
              2011. Born from a passion for the transformative power of beauty
              and grooming, Jaji’s Innovation has grown from a single salon to a
              multifaceted empire, spreading its wings across Kerala with a
              chain of luxury unisex salons, a distinguished cafe and event
              hall, an inviting food court, a trendsetting designing studio, and
              a pioneering cosmetics line.
            </p>
            <p className="text-white text-justify">
              Our founder, Dr. K Jajimole, is not just the brain behind our
              brand; she is the heart. Her journey began with a humble desire to
              bring world-class beauty services to Kerala, inspired by her
              extensive education in beauty therapy from renowned institutions
              around the globe. Dr. Jajimole’s pursuit of excellence led her to
              become one of the most scientifically educated and internationally
              recognized figures in the beauty industry. Her accolades include
              being part of the award-winning Indian team at the International
              Championship CMC Russia-Ural and securing a runner-up position in
              the Creative and Innovative Hairdo Category at an international
              level.
            </p>
          </div>
        </div>
      </div>

      {/* Available Salons Section */}
      <div
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-fixed bg-cover bg-top object-cover top-0"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Salons
          </h2>

          {data.data.length === 0 ? (
            <p className="text-center text-gray-300">No salons available</p>
          ) : (
            <div
              className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              data-aos="fade-up"
            >
              {data.data.map((salon) => (
                <Link
                  to={`/salons/${salon.id}`}
                  key={salon.id}
                  className="group transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-all duration-500">
                    {/* Image with gradient overlay */}
                    <div className="relative">
                      <img
                        src={salon.image}
                        alt={salon.name}
                        className="w-full h-[250px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">
                        {salon.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <FaMapMarkerAlt className="text-purple-600" />
                          {salon.location}
                        </p>
                        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

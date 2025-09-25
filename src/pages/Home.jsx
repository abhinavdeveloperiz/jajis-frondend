import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import {
  ShoppingBag,
  Scissors,
  GraduationCap,
  Building,
  Award,
  Utensils,
  Palette,
  Star,
  ArrowRight,
  Play,
  MapPin,
  Phone,
  Clock,
  Users,
  Heart,
  BookOpen,
} from "lucide-react";

import cosmeticsImg from "../assets/images/cosmatics.png";
import cosmetics_bg from "../assets/images/cos-bg.jpg";

export default function JajisHomepage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Expert Staff" },
    { number: "7", label: "Business Verticals" },
  ];

  const [data, setData] = useState({
    video: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Business sections data
  const businesses = [
    {
      id: "salons",
      title: "Salons",
      description:
        "Experience luxury and elegance at our premium salon services. From haircuts to spa treatments, we offer comprehensive beauty solutions with expert professionals.",
      icon: <Scissors className="w-8 h-8" />,
      link: "/salons",
      layout: "left", // text left, image right
      bgImage:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      cardImage:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      id: "cosmetics",
      title: "Cosmetics",
      description:
        "Discover our wide range of premium cosmetics designed to bring out the best in you. Quality products for every skin type and occasion.",
      icon: <Palette className="w-8 h-8" />,
      link: "/cosmetics",
      layout: "right", // text right, image left
      bgImage: cosmetics_bg,
      cardImage: cosmeticsImg,
    },
    {
      id: "event-hall",
      title: "Event Hall",
      description:
        "Make your special occasions unforgettable with our elegant event hall. Perfect for weddings, corporate events, and celebrations of all kinds.",
      icon: <Building className="w-8 h-8" />,
      link: "/event-hall",
      layout: "left",
      bgImage:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
      cardImage:
        "https://www.imperialpalacebanquethall.com/wp-content/uploads/2018/08/NWX_3528.jpg",
    },
    {
      id: "food-court",
      title: "Food Court",
      description:
        "Savor delicious cuisines from around the world at our vibrant food court. Fresh ingredients, authentic flavors, and memorable dining experiences.",
      icon: <Utensils className="w-8 h-8" />,
      link: "/food-court",
      layout: "right",
      bgImage:
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      cardImage:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "designing-stitching",
      title: "Designing & Stitching",
      description:
        "Create custom fashion pieces with our expert designing and stitching services. From traditional wear to contemporary fashion, we bring your vision to life.",
      icon: <Heart className="w-8 h-8" />,
      link: "/designing-stitching",
      layout: "left",
      bgImage:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      cardImage:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      id: "academy",
      title: "Academy",
      description:
        "Learn from the best with our comprehensive training programs. Develop your skills in beauty, fashion, and hospitality with expert guidance and certification.",
      icon: <GraduationCap className="w-8 h-8" />,
      link: "/academy",
      layout: "right",
      bgImage:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cardImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "franchise",
      title: "Franchise",
      description:
        "Join the Jajis family and start your own successful business venture. We provide complete support, training, and resources for franchise partners.",
      icon: <Award className="w-8 h-8" />,
      link: "/franchise",
      layout: "left",
      bgImage:
        "https://img.freepik.com/premium-photo/global-network-connection-franchise-marketing-system-business-concept_220873-13742.jpg",
      cardImage:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  ];

  // Fetch home video data from Django API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching home page :", err);
        setError("Failed to load home page ");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-black">
        <div>
          <div className="text-white text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-2">Oops!</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  // Hero video
  const heroVideo = data.video?.video_url;

  const BusinessSection = ({ business, index }) => {
    const isLeft = business.layout === "left";

    return (
      <section className="relative w-full h-screen bg-black text-white overflow-hidden border-b-2 border-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={business.bgImage}
            alt={`${business.title} Background`}
            className="w-full h-full object-cover"
          />
          {/* Two-sided gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isLeft
                ? "from-black/80 via-black/80 to-transparent"
                : "from-transparent via-black/40 to-black/80"
            }`}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center px-6 md:px-12">
          {/* Text Column */}
          <div
            className={`w-full md:w-1/2 text-center md:text-left ${
              !isLeft ? "md:order-2 md:pl-12" : "md:pr-12"
            }`}
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="p-3 bg-white text-black rounded-full mr-4 mt-20 md:mt-0">
                {business.icon}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
              {business.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-gray-200 drop-shadow-md">
              {business.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to={business.link}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center"
              >
                Explore {business.title} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`w-full md:w-1/2 h-80 md:h-[600px] mt-8 md:mt-0 ${
              !isLeft ? "md:order-1 md:pr-12" : "md:pl-12"
            }`}
            data-aos="fade-up"
          >
            <img
              src={business.cardImage}
              alt={`${business.title} Showcase`}
              className="w-full h-full object-cover rounded-xl shadow-2xl  
             transform transition-transform duration-300 hover:scale-101"
            />
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Hero Video */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center  h-full">
          <div className="max-w-5xl px-6 md:px-12  md:text-left">
            {/* Small intro badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-fadeIn">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold uppercase tracking-widest text-sm">
                Premium Lifestyle
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight animate-slideUp">
              Jajis Lifestyle
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-gray-200  animate-fadeIn delay-300">
              Your premier destination for beauty, fashion, events, and culinary
              experiences.
              <br /> Excellence in every service, memories in every moment.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-fadeIn delay-500">
              <Link
                to="/salons"
                className="relative px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center justify-center uppercase tracking-wide shadow-2xl hover:scale-105 transition-transform duration-300 before:absolute hover:bg-black hover:text-white"
              >
                Explore Salon
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/about-us"
                className="relative px-8 py-4 border-2 border-white text-white rounded-full font-semibold flex items-center justify-center uppercase tracking-wide shadow-lg hover:bg-white hover:text-black transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-10 before:-z-10"
              >
                <BookOpen className="mr-2 w-5 h-5" /> About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white"
        data-aos="slide-right"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300"
              >
                {/* Stat Number */}
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-400 transition-all duration-300">
                  {stat.number}
                </div>

                {/* Stat Label */}
                <div className="text-lg text-gray-300 group-hover:text-white transition-all duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sections */}
      {businesses.map((business, index) => (
        <BusinessSection key={business.id} business={business} index={index} />
      ))}

      {/* Call to Action Section */}
      <section className="py-20 bg-white text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Jajis Lifestyle for
            all their needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/about-us"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

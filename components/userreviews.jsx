"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function UserReviews() {
  const [currentIndex, setCurrentIndex] = useState(0); // Active user index
  const [showPopup, setShowPopup] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [isPaused, setIsPaused] = useState(false); // Pause on hover

  const reviews = [
    { id: 1, img: "/clients/client.svg", video: "video1.mp4" },
    { id: 2, img: "/clients/client1.svg", video: "video2.mp4" },
    { id: 3, img: "/clients/client2.svg", video: "video3.mp4" },
    { id: 4, img: "/clients/client3.svg", video: "video4.mp4" },
    { id: 5, img: "/clients/client4.svg", video: "video5.mp4" },
    { id: 6, img: "/clients/client.svg", video: "video6.mp4" },
    { id: 7, img: "/clients/client1.svg", video: "video7.mp4" },
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(5); // Default items per slide (desktop)

  useEffect(() => {
    // Update itemsPerSlide based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Mobile: Show 1 user per slide
      } else {
        setItemsPerSlide(5); // Desktop: Show 5 users per slide
      }
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle continuous loop for currentIndex
  const totalItems = reviews.length;

  useEffect(() => {
    if (isPaused) return; // Stop sliding if paused

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [isPaused, totalItems]);

  // Open popup
  const openPopup = (video) => {
    setActiveVideo(video);
    setShowPopup(true);
  };

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
    setActiveVideo("");
  };

  // Handle dot navigation (slides 2 users at a time)
  const goToSlide = (index) => {
    setCurrentIndex((index * 2) % totalItems); // Move 2 users
  };

  return (
    <div className="w-full md:max-w-[1240px] mx-auto p-5 md:p-0">
      <div className="mt-36">
        <h2 className="text-5xl 3xl:text-7xl text-center font-medium text-[#021318] leading-[57.6px] mx-auto md:w-[630px] 3xl:w-[750px] ">
          Trusted by Over 200+ Clients Worldwide
        </h2>
        <p className="text-xl 3xl:text-3xl text-center mt-8 font-medium text-[#021318CC]">
          People who chose us, and never looked back!
        </p>
      </div>
      <div
        className="relative px-0 mt-9"
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume on hover out
      >
        {/* Slider Section */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex % totalItems) * (100 / itemsPerSlide)
              }%)`,
            }}
          >
            {reviews.concat(reviews).map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center relative"
                style={{ width: `${100 / itemsPerSlide}%` }}
              >
                <Image
                  width={100000000}
                  height={100000000}
                  src={review.img}
                  alt={`User ${review.id}`}
                  className="w-56 3xl:w-60 object-cover"
                />
                <button
                  onClick={() => openPopup(review.video)}
                  className="mt-4 bg-[#12BDF3] text-white rounded-full p-2 w-10 h-10 flex items-center justify-center absolute right-7 bottom-4"
                >
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.7401 2.46289C10.1016 3.29326 11.1714 3.94579 11.9336 4.54353C12.7011 5.14537 13.2686 5.77443 13.4719 6.60375C13.621 7.21195 13.621 7.85171 13.4719 8.45991C13.2686 9.28924 12.7011 9.91829 11.9336 10.5201C11.1714 11.1179 10.1016 11.7704 8.74019 12.6007L8.74013 12.6008C7.42499 13.4029 6.31597 14.0793 5.47405 14.4638C4.62536 14.8513 3.85164 15.0477 3.09965 14.819C2.54701 14.6509 2.04417 14.3317 1.6391 13.893C1.08935 13.2975 0.868673 12.4745 0.764269 11.484C0.66063 10.5008 0.660636 9.2137 0.660645 7.57668V7.57667V7.48699V7.48698C0.660636 5.84996 0.66063 4.56287 0.764269 3.57965C0.868673 2.58918 1.08935 1.76616 1.6391 1.17068C2.04417 0.731924 2.54701 0.412814 3.09965 0.244689C3.85164 0.0159157 4.62536 0.212337 5.47405 0.599879C6.31597 0.98433 7.42496 1.66074 8.7401 2.46289Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(totalItems / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                Math.floor(currentIndex / 2) === index
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Video Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-3/4 max-w-2xl relative">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-3 hover:bg-red-600 z-50"
              >
                ✕
              </button>
              <video
                src={activeVideo}
                controls
                className="w-full h-auto"
              ></video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

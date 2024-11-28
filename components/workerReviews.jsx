"use client";

import { useState } from "react";
import Image from "next/image";
import Img from "@/public/workers/2.svg";
import Play from "@/public/icons/playButton.svg";
import star from "@/public/icons/5star.svg";
import commas from "@/public/icons/commas.svg";
import left from "@/public/icons/leftArrow.svg";
import right from "@/public/icons/rightArrow.svg";

const reviews = [
  {
    id: 1,
    workerImage: Img,
    workerName: "Kate Williams",
    workerRole: "Partner, Maxwell Locke & Ritter",
    reviewText:
      "I have been working with IKONIC for nearly two years now. With their keen eye for design, development skills, and expert project management, I have managed to serve a lot more clients than I would without them.",
    ratingImage: star,
  },
  {
    id: 2,
    workerImage: Img,
    workerName: "John Doe",
    workerRole: "CEO, Tech Innovators",
    reviewText:
      "IKONIC's design and project management services helped us scale quickly. Their dedication to quality and innovation is second to none.",
    ratingImage: star,
  },
  {
    id: 3,
    workerImage: Img,
    workerName: "Jane Smith",
    workerRole: "Founder, Creative Labs",
    reviewText:
      "Working with IKONIC has been a game-changer for our business. They exceeded our expectations in both design and delivery.",
    ratingImage: star,
  },
];

const WorkerReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const goToNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <main className="p-10 flex flex-col ">
      {/* Navigation Buttons */}
      <div className="flex gap-10 items-end mb-5 ">
        <button onClick={goToPrevReview}>
          <Image src={left} alt="Left arrow" />
        </button>
        <button onClick={goToNextReview}>
          <Image src={right} alt="Right arrow" />
        </button>
      </div>

      {/* Sliding Reviews */}
      <div className="relative w-full overflow-hidden max-w-4xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentReviewIndex * 100}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-none w-full gap-10 p-5 bg-cover bg-center"
            >
              {/* Worker Image and Play Button */}
              <div className="flex-shrink-0">
                <Image
                  src={review.workerImage}
                  alt={`${review.workerName}'s Image`}
                />
                <div className="flex flex-col items-center justify-center bg-[#021318] text-white w-fit p-3 rounded-full mt-3">
                  PLAY NOW
                  <div className="flex justify-center bg-[#021318] border-[#12BDF3] border-2 py-3 px-3.5 w-fit rounded-full items-center">
                    <Image src={Play} alt="Play button" />
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div
                className="ml-5 flex flex-col justify-center"
                style={{
                  backgroundImage: `url(${commas.src})`,
                  backgroundSize: "100px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top left",
                }}
              >
                <h1 className="text-3xl mb-5">{`"${review.reviewText}"`}</h1>
                <Image src={review.ratingImage} alt="Star" className="mb-3" />
                <h4 className="font-semibold">{review.workerName}</h4>
                <p className="text-[#999999] font-light">{review.workerRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorkerReviews;

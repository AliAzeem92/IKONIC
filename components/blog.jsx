import React from "react";
import openLinkWhite from "@/public/icons/openLinkWhite.svg";
import Image from "next/image";
import blog1 from "@/public/blog/blog1.svg";
import blog2 from "@/public/blog/blog2.svg";
import blog3 from "@/public/blog/blog3.svg";

const blogPosts = [
  {
    src: blog1,
    alt: "Blog Image 1",
    title: "Optimizing Code Efficiency and Performance Enhancement.",
    readTime: "2 min read",
  },
  {
    src: blog2,
    alt: "Blog Image 2",
    title: "Building a Scalable Subscription Management for FlexiBilling",
    readTime: "2 min read",
  },
  {
    src: blog3,
    alt: "Blog Image 3",
    title: "We Integrated API Solutions: Real-Time Data Sync for FinTech",
    readTime: "2 min read",
  },
];

const Blog = () => {
  return (
    <main className="flex flex-col justify-center p-[7%] gap-10  ">
      <div>
        <h1 className="text-5xl font-semibold mb-10 ">
          Explore Our Expert Blogs
        </h1>
        <div className="flex justify-between ">
          <p className="sm:w-[60%] text-lg ">
            Explore expert insights, trends, and tips for business and tech
            success with IKONIC. Stay informed and inspired with our latest
            updates and innovations.
          </p>
          <div className="flex p-2 px-7 gap-7 rounded bg-black text-white ">
            <button className="text-center text-lg sm:text-xl w-full">
              View All
            </button>
            <Image
              src={openLinkWhite}
              alt="Went to Link"
              className="transition-all duration-300 group-hover:filter group-hover:invert"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        {blogPosts.map((post, index) => (
          <div key={index}>
            <Image src={post.src} alt={post.alt} />
            <div className="flex flex-col gap- mt-5 ">
              <h6 className="w-[90%] font-semibold text-xl ">{post.title}</h6>
              <p className="text-[gray] ">{post.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;

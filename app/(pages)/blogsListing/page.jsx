"use client";
import { useEffect, useState } from "react";
import BlogListing from "@/public/blog/blogListing.svg";
import Image from "next/image";
import { items, newBannerItems } from "@/components/ui/bannerData";
import ScrollingBanner from "@/components/languageBanner";
import FAQ from "@/components/faqsection";
import ContactForm from "@/components/contactForm";

const hoverText = [
  { Text: "Ui UX" },
  { Text: "SEO & Marketing" },
  { Text: "Web Development" },
  { Text: "Business" },
];

const blogImg = [
  {
    id: 1,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 2,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 3,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 4,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 5,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 6,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 7,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 8,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 9,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 10,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 11,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 12,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 13,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 14,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
  {
    id: 15,
    Src: BlogListing,
    Alt: "Blog Listing Image",
    Title: "Optimizing Code Efficiency and Performance Enhancement.",
    time: "2 min read",
  },
];

const page = () => {
  const [banners, setBanners] = useState([]);
  const [newBanners, setNewBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(items), 1000)
      );
      const newResponse = await new Promise((resolve) =>
        setTimeout(() => resolve(newBannerItems), 1000)
      );

      setBanners(response);
      setNewBanners(newResponse);
    };
    fetchData();
  }, []);
  return (
    <main id="Blogs Listing">
      <div>
        <h6 className="text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center mx-auto w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
          Blogs
        </h6>
        <h1 className="text-4xl md:text-7xl 3xl:text-8xl font-semibold text-center mx-auto mt-[2%] px-[5%] max-w-[90%] ">
          Explore digital insights driving success.
        </h1>
        <p className="text-base sm:text-xl 3xl:text-3xl font-normal 3xl:font-semibold sm:max-w-[85%] text-center mx-auto mt-[3%] text-[#021318B2] px-[16%] leading-8 ">
          <span>
            Stay ahead with our digital insights, highlighting innovative
            strategies that drive growth. Explore how our solutions create
            impactful results for businesses.
          </span>
        </p>
        <div className="flex justify-center mt-[2%] gap-[1%] ">
          <h1>Hover</h1>
        </div>
        <div className="flex flex-col items-center px-[7%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 sm:mt-14 mt-10 ">
            {blogImg.map((blog, index) => (
              <div key={index} className="rounded-[10px] ">
                <Image src={blog.Src} alt={blog.Alt} className="w-[100%] " />
                <h2 className="text-2xl font-semibold text-[#021318] px-[10px] py-[5px] ">
                  {blog.Title}
                </h2>
                <p className="text-lg font-normal text-[#021318B2] px-[10px] py-[5px] ">
                  {blog.time}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden py-[50px] 3xl:py-[90px] ">
          {banners.map((banner, index) => (
            <ScrollingBanner
              key={index}
              bgColor={banner.bgColor}
              items={banner.languages}
              rotate={banner.rotate}
            />
          ))}
          {/* Render second set of banners */}
          {newBannerItems.map((banner, index) => (
            <ScrollingBanner
              key={`new-${index}`}
              bgColor={banner.bgColor}
              items={banner.languages}
              rotate={banner.rotate}
            />
          ))}
        </div>
        <FAQ />
        <ContactForm />
      </div>
    </main>
  );
};

export default page;

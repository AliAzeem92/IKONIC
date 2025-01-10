"use client";

import Image from "next/image";
import JoneDeo from "@/public/SubsImages/JoneDeo.svg";
import BlogDetail from "@/public/blog/blogDetail.svg";
import Pin from "@/public/icons/pinWithShadow.svg";
import Menu from "@/public/icons/menuDots.svg";
import menuDotsColoured from "@/public/icons/menuDotsColoured.svg";
import HeroHoverButton from "@/components/heroSection/heroHoverButton";
import ImageCarousel from "@/components/imageCarousel";
import Laptop1 from "@/public/laptop/laptop1.svg";
import Laptop2 from "@/public/laptop/laptop2.svg";
import bg from "@/public/maskImgsGroupBg.svg";
import bgSm from "@/public/maskImgsGroupBgSm.svg";
import Book from "@/public/blog/blueBook.svg";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import fb from "@/public/icons/fbOffColor.svg";
import X from "@/public/icons/XOffColor.svg";
import LinkedIn from "@/public/icons/linkedInOffColor.svg";
import CilentsGroup from "@/public/clients/CilentsGroup.svg";
import { useEffect, useState } from "react";

const BlogsDetail = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <main className="px-[7%] ">
      <div className="flex w-[100%] gap-16 ">
        <div className="sm:w-[70%] ">
          <h6 className="mx-auto sm:mx-0 text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
            Digital Marketing, SEO
          </h6>
          <h1 className="text-center sm:text-left text-3xl sm:text-5xl 3xl:text-7xl 3xl:w-[70%] font-semibold mt-[3%] ">
            Optimizing Code Efficiency and Performance
          </h1>
          <div className="flex items-center text-center mt-[5%] gap-3 3xl:gap-5 text-xs sm:text-base 3xl:text-3xl ">
            <Image src={JoneDeo} alt="Jone Deo" className="3xl:w-[5%] " />
            <span>Jone Deo</span>
            <p className="text-[#999999] ">on 29th Nov 2024</p>
            <span className="text-[#999999] px-5 ">|</span>
            <span>5 minute read</span>
          </div>
          <Image
            src={BlogDetail}
            alt="Blog Detail"
            className="my-[4%] w-full "
          />
          <div className="sm:hidden ">
            <div className="bg-[#02131808] p-7 rounded-xl mt-[7%] ">
              <h4 className="text-2xl 3xl:text-4xl font-semibold pb-4 ">
                Table of Contents
              </h4>
              <div className="space-y-4 3xl:text-xl ">
                <p className="font-semibold ">- Introduction</p>
                <p className="text-[#02131899] ">
                  - AI-Powered Development Tools
                </p>
                <p className="text-[#02131899] ">
                  - Progressive Web Apps (PWAs)
                </p>
                <p className="text-[#02131899] ">- Serverless Architecture</p>
                <p className="text-[#02131899] ">- Enhanced Cybersecurity</p>
                <p className="text-[#02131899] ">
                  - Motion UI and Microinteractions
                </p>
                <p className="text-[#02131899] ">- Enhanced Cybersecurity</p>
                <p className="text-[#02131899] ">- Enhanced Cybersecurity</p>
              </div>
            </div>
            <br />
            <div className="bg-[#021318] text-white rounded-xl p-[6%] ">
              <div className="flex justify-end ">
                <Image src={menuDotsColoured} alt="Menu Dots Coloured" />
              </div>
              <h4 className="font-medium text-2xl 3xl:text-5xl w-[80%] mb-[2%] ">
                Unlock the Secrets to Hiring Top Talent
              </h4>
              <p className="font-light 3xl:text-3xl w-[70%] text-[lightgray] mb-[10%] ">
                Don&apos;t Miss This Opportunity! Streamline your hiring process
                with IKONIC.
              </p>
              <div className="flex justify-center ">
                <Button
                  title="Let's Talk "
                  className="bg-[#28C3F4] hover:bg-[#1CAFE0] 3xl:text-3xl "
                />
              </div>
            </div>
            <br />
            <h4 className="text-3xl 3xl:text-5xl font-semibold ">
              Share this post
            </h4>
            <div className="flex gap-5 mt-5 3xl:mt-7 ">
              <Image src={fb} alt="Facebook" className="w-[11%] " />
              <Image src={X} alt="Twitter" className="w-[11%] " />
              <Image src={LinkedIn} alt="LinkedIn" className="w-[11%] " />
            </div>
          </div>
          <div className="text-lg 3xl:text-4xl 3xl:leading-relaxed ">
            <p>
              Stay ahead with our digital insights, highlighting innovative
              strategies that drive growth. Explore how our solutions create
              impactful results for businesses.
              <br />
              <br />
              <b>
                The world of web development is constantly evolving, driven by
                new technologies,
              </b>
              shifting user expectations, and emerging digital trends. As we
              head into 2024, it&apos;s crucial for businesses and developers
              alike to stay ahead of the curve. Top web development trends that
              will shape the industry in the coming year.
              <br />
              <br />
              Lorem Ipsum&apos;s simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. Lorem Ipsum&apos;s simply dummy
              text of the printing and typesetting industry.
            </p>
            <br />
            <p className="border-l-4 border-[#12BDF3] p-4 text-lg 3xl:text-4xl 3xl:leading-relaxed">
              Lorem Ipsum&apos;s simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s.
            </p>
            <br />
            <br />
            <h2 className="text-3xl font-semibold">
              How to Minimize HTTP Requests:
            </h2>
            <ul className="space-y-1 list-disc pl-5 ml-3 mt-5">
              <li>
                Combine CSS and JavaScript files Instead of loading multiple
                separate CSS or JS files, combine them into a single file to
                reduce the number of requests.
              </li>
              <li>
                Use image sprites Instead of loading many small images
                individually, consider using image sprites, which combine
                multiple images into one file.
              </li>
              <li>
                Lazy loading: For images and media that are not immediately
                visible when a page loads, implement lazy loading, which loads
                these elements only when they&apos;re needed.
              </li>
            </ul>

            <div className="flex justify-between relative top-16">
              <Image src={Pin} alt="Pin" className="relative right-3" />
              <Image src={Menu} alt="Menu" className="relative right-8" />
            </div>
            <div className="sm:flex bg-[#faefd2] pl-[7%] pr-[5%] py-[5%] rounded-lg">
              <div>
                <h1 className="text-4xl 3xl:text-6xl font-bold w-[80%] pt-8 sm:pt-0">
                  Are you ready to start your development project?
                </h1>
                <HeroHoverButton
                  className="sm:block hidden w-fit sm:mt-[40px] my-[10px] bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg 3xl:font-semibold"
                  text="Hire a Developer Now"
                />
              </div>
              <div className="flex flex-col justify-end bottom-10 sm:right-5 relative mt-16 sm:mt-0">
                <ImageCarousel
                  getImageClasses={(index) =>
                    index === 1
                      ? "size-20 p-2 3xl:size-36 3xl:p-3"
                      : "size-16 p-2 3xl:size-24 3xl:p-3"
                  }
                />
              </div>
              <HeroHoverButton
                className="sm:hidden mx-auto w-fit sm:mt-[40px] my-[10px] bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg 3xl:font-semibold"
                textClassName="text-sm"
                text="Hire a Developer Now"
              />
            </div>

            <br />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Optimize Images and Media
            </h2>
            <br />
            <p>
              Large image and media files can drastically increase load times.
              By optimizing images, you can significantly improve web
              performance without sacrificing quality.
            </p>
            <br />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Best Practices for Image Optimization:
            </h2>
            <ul className="list-disc pl-5 ml-3 mt-5 ">
              <li>
                Compress images: Use image compression tools like TinyPNG or
                ImageOptim to reduce file size without losing quality.
              </li>
              <li>
                Choose the right format: Use the most appropriate image format
                for your needs. For example, WebP offers better compression than
                PNG or JPEG, and SVGs are great for logos and icons.
              </li>
              <li>
                Responsive images: Serve different image sizes based on the
                user&apos;s device, ensuring faster load times on mobile devices
                by using the srcset attribute in your img tags.
              </li>
            </ul>
            <br />
            <p className="border-l-4 border-[#12BDF3] p-4 text-lg 3xl:text-4xl 3xl:leading-relaxed  ">
              Lorem Ipsum&apos;is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s.
            </p>
            <br />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Minimize and Bundle JavaScript and CSS
            </h2>
            <br />
            <p>
              JavaScript and CSS are integral to the functionality and
              appearance of modern websites, but excessive or inefficient code
              can harm performance. Reducing the size of these files can have a
              big impact on page load times.
            </p>
            <br />
            <Image src={Laptop1} alt="Laptop1" className="w-full " />
            <br />
            <p>
              Minify your files: Minification removes unnecessary characters
              (like spaces and comments) from your code, reducing file size.
              Tools like UglifyJS for JavaScript and CSSNano for CSS can help
              with this. Instead of including several small JS or CSS files,
              bundle them into one or two larger files to reduce HTTP requests.
              Be cautious about the trade-off between bundling and caching. Use
              CSS and JS preprocessors: Sass, LESS, and other preprocessors can
              streamline your CSS code and allow for easier maintenance, as well
              as reduce redundant code.
            </p>
            <br />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Optimize Web Fonts
            </h2>
            <br />
            <p>
              Minify your files: Minification removes unnecessary characters
              (like spaces and comments) from your code, reducing file size.
              Tools like UglifyJS for JavaScript and CSSNano for CSS can help
              with this. Instead of including several small JS or CSS files,
              bundle them into one or two larger files to reduce HTTP requests.
              Be cautious about the trade-off between bundling and caching. Use
              CSS and JS preprocessors: Sass, LESS, and other preprocessors can
              streamline your CSS code and allow for easier maintenance, as well
              as reduce redundant code.
            </p>
            <br />
            <Image src={Laptop2} alt="Laptop2" className="w-full " />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Regularly Monitor and Test Performance
            </h2>
            <br />
            <p>
              Optimization is an ongoing process. Regularly monitoring and
              testing the performance of your web application will help you
              identify areas for improvement.
            </p>
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Performance Monitoring Tools:
            </h2>
            <ul className="space-y-1 list-disc pl-5 ml-3 mt-5 ">
              <li>
                Google Lighthouse: Use Google Lighthouse to audit your
                website&apos;s performance and receive actionable insights for
                optimization.
              </li>
              <li>
                WebPageTest: This tool offers in-depth performance analysis,
                including detailed metrics like Time to First Byte (TTFB) and
                fully loaded time.
              </li>
              <li>
                GTmetrix: GTmetrix provides a comprehensive performance report
                that includes suggestions for improvement and visual insights
                into how your site loads.
              </li>
            </ul>
            <br />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">Conclusion</h2>
            <br />
            <p>
              Optimizing code efficiency and performance is essential for
              creating fast, reliable, and user-friendly web applications. By
              employing the strategies outlined in this post—such as minimizing
              HTTP requests, optimizing images, using caching effectively, and
              reducing third-party scripts—you can significantly enhance your
              website&apos;s performance. With regular testing and ongoing
              improvements, you can ensure a seamless, high-quality user
              experience, leading to increased satisfaction and better business
              outcomes.
            </p>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row gap-5 bg-[#02131808] py-[3.5%] pl-[4.5%] pr-[6.5%] rounded-xl ">
              <div>
                <Image
                  src={Book}
                  alt="book"
                  className="3xl:w-96 sm:bolck hidden "
                />
              </div>
              <div className="flex flex-col justify-between py-3 sm:w-[70%] ">
                <div>
                  <h1 className="text-4xl 3xl:text-6xl font-bold  ">
                    Analyze The Best Option For Hiring Developers
                  </h1>
                  <p className="leading-8 3xl:leading-10 mt-4 3xl:mt-8 ">
                    Discover the top insights and practical tips on software
                    development outsourcing in our latest ebook.
                  </p>
                </div>
                <div className="mx-auto relative left-5 ">
                  <Image
                    src={Book}
                    alt="book"
                    className="3xl:w-96 sm:hidden "
                  />
                </div>
                <div className="mx-auto ">
                  <button className="flex items-center gap-4 bg-black text-white px-12 py-3 rounded-lg ">
                    Download Now
                    <span className="3xl:hidden ">
                      <ArrowRight />
                    </span>
                    <span className="hidden 3xl:block ">
                      <ArrowRight size={48} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Regularly Monitor and Test Performance
            </h2>
            <br />
            <p>
              Optimization is an ongoing process. Regularly monitoring and
              testing the performance of your web application will help you
              identify areas for improvement.
            </p>
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">
              Performance Monitoring Tools:
            </h2>
            <ul className="space-y-1 list-disc pl-5 ml-3 mt-5 ">
              <li>
                Google Lighthouse: Use Google Lighthouse to audit your
                website&apos;s performance and receive actionable insights for
                optimization.
              </li>
              <li>
                WebPageTest: This tool offers in-depth performance analysis,
                including detailed metrics like Time to First Byte (TTFB) and
                fully loaded time.
              </li>
              <li>
                GTmetrix: GTmetrix provides a comprehensive performance report
                that includes suggestions for improvement and visual insights
                into how your site loads.
              </li>
            </ul>
            <br />
            <br />
            <h2 className="text-3xl 3xl:text-5xl font-semibold ">Conclusion</h2>
            <br />
            <p>
              Optimizing code efficiency and performance is essential for
              creating fast, reliable, and user-friendly web applications. By
              employing the strategies outlined in this post—such as minimizing
              HTTP requests, optimizing images, using caching effectively, and
              reducing third-party scripts—you can significantly enhance your
              website&apos;s performance. With regular testing and ongoing
              improvements, you can ensure a seamless, high-quality user
              experience, leading to increased satisfaction and better business
              outcomes.
            </p>
          </div>
        </div>
        <div className="w-[30%] hidden sm:block ">
          <div className="bg-[#02131808] p-7 rounded-xl mt-[27%] ">
            <h4 className="text-2xl 3xl:text-4xl font-semibold pb-4 ">
              Table of Contents
            </h4>
            <div className="space-y-4 3xl:text-xl ">
              <p className="font-semibold ">- Introduction</p>
              <p className="text-[#02131899] ">
                - AI-Powered Development Tools
              </p>
              <p className="text-[#02131899] ">- Progressive Web Apps (PWAs)</p>
              <p className="text-[#02131899] ">- Serverless Architecture</p>
              <p className="text-[#02131899] ">- Enhanced Cybersecurity</p>
              <p className="text-[#02131899] ">
                - Motion UI and Microinteractions
              </p>
              <p className="text-[#02131899] ">- Enhanced Cybersecurity</p>
              <p className="text-[#02131899] ">- Enhanced Cybersecurity</p>
            </div>
          </div>
          <br />
          <div className="bg-[#021318] text-white rounded-xl p-[6%] ">
            <div className="flex justify-end ">
              <Image src={menuDotsColoured} alt="Menu Dots Coloured" />
            </div>
            <h4 className="font-medium text-2xl 3xl:text-5xl w-[80%] mb-[2%] ">
              Unlock the Secrets to Hiring Top Talent
            </h4>
            <p className="font-light 3xl:text-3xl w-[70%] text-[lightgray] mb-[10%] ">
              Don&apos;t Miss This Opportunity! Streamline your hiring process
              with IKONIC.
            </p>
            <div className="flex justify-center ">
              <Button
                title="Let's Talk "
                className="bg-[#28C3F4] hover:bg-[#1CAFE0] 3xl:text-3xl "
              />
            </div>
          </div>
          <br />
          <h4 className="text-3xl 3xl:text-5xl font-semibold ">
            Share this post
          </h4>
          <div className="flex gap-5 mt-5 3xl:mt-7 ">
            <Image src={fb} alt="Facebook" className="w-[11%] " />
            <Image src={X} alt="Twitter" className="w-[11%] " />
            <Image src={LinkedIn} alt="LinkedIn" className="w-[11%] " />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        className="w-full text-center text-3xl sm:text-4xl 3xl:text-7xl font-bold text-white bg-[#266DF0] pt-[177px] pb-[229px] sm:py-[6%] rounded-md space-y-2 "
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: isSmallScreen
            ? `url(${bg.src})` // Default background
            : `url(${bgSm.src})`, // Background for small screens
        }}
      >
        <p className="text-[#92b6f8] ">Your Remote</p>
        <p className="pb-2 3xl:pb-4 ">
          Development
          <span className="sm:hidden ">
            <br />
          </span>
          Team is
        </p>
        <button className="text-lg 3xl:text-6xl bg-black px-10 py-1 3xl:py-3 rounded-md ">
          Just A Click Away!
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-center my-[8%] ">
        <div>
          <Image
            src={CilentsGroup}
            alt="Cilents Group"
            className="3xl:w-[1000px] "
          />
        </div>
        <br />
        <h4 className="text-2xl sm:text-3xl 3xl:text-5xl font-bold sm:font-semibold ">
          Discover IKONIC Success Stories
        </h4>
        <p className="sm:w-[45%] 3xl:text-2xl 3xl:font-semibold ">
          See how IKONIC contributed to the growth of our partners and discover
          the potential of our team.
        </p>
      </div>
    </main>
  );
};

export default BlogsDetail;

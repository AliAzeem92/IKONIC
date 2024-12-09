import Image from 'next/image';

const beforeFooter = () => {
  return (
    <div className="bg-[#F4F4F4] py-14 md:py-20 mt-20 px-5 md:px-0">
      <div className="w-full md:max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-[30px] md:text-[48px] font-medium leading-[36px] md:leading-[57.6px] w-[340px] md:max-w-[545px] tracking-tighter">
                Ask for a Pricing Plan Now, Just a
                <span className="text-[#12BDF3]">&nbsp;Click Away!</span>
              </h3>
              <p className="w-full md:max-w-[500px] mt-8 text-base font-normal">
                Align with IKONIC, A top IT provider, and discover tailored
                technology solutions crafted to suit your unique business needs.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <Image
                src="/group-images.svg"
                alt="Group Images"
                width={100000000}
                height={100000000}
                className="w-[25%]"
              />
              <h4 className="text-base font-bold">We love to help you!</h4>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <form action="/">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2 flex items-center gap-4 bg-white py-3 px-6 rounded-[9px]">
                  <Image
                    src="/user.svg"
                    alt="user"
                    width={10000000}
                    height={10000000}
                    className="w-5"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="outline-none w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 flex items-center gap-4 bg-white py-3 px-6 rounded-[9px]">
                  <Image
                    src="/user.svg"
                    alt="user"
                    width={10000000}
                    height={10000000}
                    className="w-5"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 mt-5">
                <div className="w-full md:w-1/2 flex items-center gap-4 bg-white py-3 px-6 rounded-[9px]">
                  <Image
                    src="/phone.svg"
                    alt="Phone"
                    width={10000000}
                    height={10000000}
                    className="w-5"
                  />
                  <input
                    type="phone"
                    placeholder="Phone"
                    className="outline-none w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 flex items-center gap-4 bg-white py-3 px-6 rounded-[9px]">
                  <Image
                    src="/envelop.svg"
                    alt="Envelop"
                    width={10000000}
                    height={10000000}
                    className="w-5"
                  />
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    className="outline-none w-full"
                  />
                </div>
              </div>

              <textarea
                placeholder="Tell us more about your project."
                cols="30"
                rows="7"
                className="mt-5 py-[28px] px-[33px] rounded-[9px] w-full resize-none outline-none"
              ></textarea>
              <button className="bg-[#12BDF3] text-white flex items-center justify-center w-full py-5 rounded-md mt-4">
                Submit Form
                <Image
                  src="/submit.svg"
                  alt="Submit"
                  width={10000000}
                  height={10000000}
                  className="w-4 ml-3"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default beforeFooter;

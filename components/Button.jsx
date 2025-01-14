// "use client";

// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";
// import greenCircleTick from "@/public/icons/greenCircleTick.svg";
// import { Phone } from "lucide-react";
// import HeroHoverButton from "./heroSection/heroHoverButton";

// const ButtonWithDialog = ({ title, className = "", ...props }) => {
//   const [open, setOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: "", email: "" });
//     }, 300);
//   };

//   return (
//     <div>
//       <button
//         className={`px-[31.5px] py-[16px] text-white rounded-lg font-semibold flex items-end gap-1 ${className}`}
//         {...props}
//         onClick={() => setOpen(true)}
//       >
//         {title}
//         <div className="loader"></div>
//         {/* <Rocket className="h-5 w-5 ml-2" /> */}
//       </button>

// <Dialog open={open} onOpenChange={handleClose}>
//   <DialogContent
//     className={`${
//       submitted
//         ? "sm:max-w-[1000px] sm:max-h-[694.47px]"
//         : "sm:max-w-[40%] sm:max-h-max "
//     }`}
//   >
//     {!submitted ? (
//       <div className="px-[76.88px] ">
//         <h6 className="mx-auto text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
//           Let&apos;s Scale your team smarter 🥳
//         </h6>
//         <DialogHeader>
//           <DialogTitle className="text-center text-4xl 3xl:text-7xl font-bold 3xl:font-semibold 3xl:pt-3 ">
//             Ready to start your Dev Subscription?
//           </DialogTitle>
//         </DialogHeader>
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 py-4 px-[42.01px] text-xl "
//         >
//           <div className="space-y-2">
//             <Label htmlFor="name" className="3xl:text-3xl">
//               Name
//             </Label>
//             <Input
//               id="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               required
//               className="placeholder:text-lg text-xl"
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email" className="3xl:text-3xl">
//               Email
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="youremail@example.com"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               required
//               className="placeholder:text-lg text-xl"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 bg-[#021318] hover:bg-[#021318f0] "
//           >
//             Get a Quote Today!
//           </button>
//         </form>
//       </div>
//     ) : (
//       <div className="">
//         <div className="py-12 text-center space-y-4 ">
//           <h6 className="flex space-x-2 mx-auto text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
//             Almost
//             <br /> <b>Done</b>
//             <Image
//               src={greenCircleTick}
//               alt="Green Circle Tick"
//               className="pl-2 "
//             />
//           </h6>
//           <h2 className="text-5xl font-bold text-primary">
//             Thank you for your submission!
//           </h2>
//           <p className="text-muted-foreground 3xl:font-medium 3xl:text-lg ">
//             Due to the high demand for Dev Subscription, Appointments are
//             <br />
//             First-Come, First-Serve!
//           </p>
//           <div className="border-b-[#CECECE] border-[0.01px] w-[80%] mx-auto "></div>
//           <p className="font-medium 3xl:text-lg ">
//             Reserve Your Spot Now
//           </p>
//           <p className="flex items-center justify-center gap-2 ">
//             <Phone />{" "}
//             <span className="3xl:text-lg text-black/70">051 4800841</span>
//           </p>
//           <br />
//           <p className="text-black/70 ">Schedule Appointment Below</p>
//           <div className="mx-auto w-fit ">
//             <HeroHoverButton
//               onClick={handleClose}
//               className="w-fit bg-[#28C3F4] hover:bg-black hover:text-white transition-all duration-300 shadow-lg sm:w-auto"
//               text="Schedule Now"
//             />
//           </div>
//         </div>
//       </div>
//     )}
//   </DialogContent>
// </Dialog>
//     </div>
//   );
// };

// export default ButtonWithDialog;
//
//
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket } from "lucide-react";

export default function Home({ title, className = "", ...props }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    router.push("/thank-you");
  };

  return (
    <div className="min-h-scree flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      {/* <Button
        size=""
        onClick={() => setOpen(true)}
        className="bg-primary hover:bg-primary/90"
      >
        <Rocket className="mr-2 h-5 w-5" />
        Let&apos;s Scale Your Team
      </Button> */}
      <button
        className={`px-[31.5px] py-[16px] text-white rounded-lg font-semibold flex items-end gap-1 ${className}`}
        {...props}
        onClick={() => setOpen(true)}
      >
        {title}
        <div className="loader"></div>
        {/* <Rocket className="h-5 w-5 ml-2" /> */}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="px-[76.88px] ">
            <h6 className="mx-auto text-base 3xl:text-4xl font-normal 3xl:font-semibold bg-[#ebecec] text-center w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
              Let&apos;s Scale your team smarter 🥳
            </h6>
            <DialogHeader>
              <DialogTitle className="text-center text-4xl 3xl:text-7xl font-bold 3xl:font-semibold 3xl:pt-3 ">
                Ready to start your Dev Subscription?
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py- text-xl ">
              <div className="space-y-2">
                <Label htmlFor="name" className="3xl:text-3xl">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="3xl:placeholder:text-lg 3xl:text-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="3xl:text-3xl">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="3xl:placeholder:text-lg 3xl:text-xl"
                />
              </div>
              <Button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 bg-[#021318] hover:bg-[#021318f0] "
              >
                Get a Quote Today!
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

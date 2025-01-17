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
    <div className="flex flex-col items-cente ">
      <button
        className={`px-[16.5px] py-[8px] lg:px-[31.5px] lg:py-[16px] text-xl sm:text-xs lg:text-lg 3xl:text-4xl text-white rounded-lg font-semibold flex items-end gap-1 ${className}`}
        {...props}
        onClick={() => setOpen(true)}
      >
        {title}
        <div className="loader"></div>
      </button>

      {/* Pop-Up */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="px-[12.5%] py-[3%] ">
            <h6 className="mx-auto text-sm sm:text-base 3xl:text-3xl 4xl:text-4xl font-normal bg-[#ebecec] text-center w-fit px-[20px] py-[6px] 3xl:px-[40px] 3xl:py-[8px] rounded-full mt-[5%] ">
              <b>Let&apos;s Scale</b> your team smarter 🥳
            </h6>
            <DialogHeader>
              <DialogTitle className="text-center capitalize text-2xl sm:text-4xl 3xl:text-6xl 4xl:text-7xl font-semibold 3xl:font-semibold 3xl:pt-3 ">
                Ready to start your Dev Subscription?
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 text-xl ">
              <div className="space-y-2.5 3xl:space-y-3 relative bottom-3  ">
                <Label
                  htmlFor="name"
                  className="3xl:text-3xl ml-5 3xl:ml-10 px-2 relative top-5 3xl:top-7 bg-white "
                >
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
                  className=""
                />
              </div>
              <div className="space-y-2.5 3xl:space-y-3 relative bottom-7  ">
                <Label
                  htmlFor="email"
                  className="3xl:text-3xl ml-5 3xl:ml-10 px-2 relative top-5 3xl:top-7 bg-white "
                >
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
                  className=""
                />
              </div>
              <Button
                type="submit"
                className="w-full px-4 py-2 3xl:py-8 3xl:text-3xl text-white bg-primary rounded-lg hover:bg-primary/90 bg-[#021318] hover:bg-[#021318f0] "
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

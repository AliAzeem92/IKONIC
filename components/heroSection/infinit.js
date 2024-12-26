import Img from "@/public/workers/1.svg";
import angular from "@/public/developer/angular.svg";
import js from "@/public/developer/js.svg";
import laravel from "@/public/developer/laravel.svg";
import nodejs from "@/public/developer/nodejs.svg";
import reactNative from "@/public/developer/reactNative.svg";
import swift from "@/public/developer/swift.svg";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const items = [
  {
    name: "Liam Rodriguez",
    developer: angular,
  },
  {
    name: "Liam Johnson",
    developer: js,
  },
  {
    name: "Sophia Patel",
    developer: laravel,
  },
  {
    name: "Ethan Davis",
    developer: nodejs,
  },
  {
    name: "Noah Smith",
    developer: reactNative,
  },
  {
    name: "Alex Green",
    developer: swift,
  },
];

const Infinit = () => {
  return (
    <div>
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        bgImage={Img.src}
        className="my-custom-class"
      />
    </div>
  );
};

export default Infinit;

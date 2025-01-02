import Img from "@/public/workers/AlexGreen.png";
import angular from "@/public/developer/angular.svg";
import js from "@/public/developer/js.svg";
import laravel from "@/public/developer/laravel.svg";
import nodejs from "@/public/developer/nodejs.svg";
import reactNative from "@/public/developer/reactNative.svg";
import swift from "@/public/developer/swift.svg";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const items = [
  {
    bgImage: "/workers/LiamRodriguez.png",
    name: "Liam Rodriguez",
    developer: angular,
    backgroundColor: "#f9d1b3",
  },
  {
    bgImage: "/workers/LiamJohnson.png",
    name: "Liam Johnson",
    developer: js,
    backgroundColor: "#ffb2c3",
  },
  {
    bgImage: "/workers/SophiaPatel.png",
    name: "Sophia Patel",
    developer: laravel,
    backgroundColor: "#fffda7",
  },
  {
    bgImage: "/workers/EthanDavis.png",
    name: "Ethan Davis",
    developer: nodejs,
    backgroundColor: "#f1878a",
  },
  {
    bgImage: "/workers/NoahSmith.png",
    name: "Noah Smith",
    developer: reactNative,
    backgroundColor: "#e3ffbf",
  },
  {
    bgImage: "/workers/AlexGreen.png",
    name: "Alex Green",
    developer: swift,
    backgroundColor: "#a6d9e6",
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
      />
    </div>
  );
};

export default Infinit;

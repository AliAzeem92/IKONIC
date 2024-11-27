import Image from "next/image";
// import Img from "@/public/SubsImages/1.svg";

const SubsImage = ({ Img }) => {
  return (
    <div className="-m-1 ">
      <Image src={Img} alt="Subs Image" />
    </div>
  );
};

export default SubsImage;

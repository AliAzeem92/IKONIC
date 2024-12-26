import Image from "next/image";

const SubsImage = ({ Img }) => {
  return (
    <div className="-m-1 ">
      <Image src={Img} alt="Subs Image" className="w-auto  3xl:w-16 " />
    </div>
  );
};

export default SubsImage;

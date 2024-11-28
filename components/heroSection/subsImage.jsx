import Image from "next/image";

const SubsImage = ({ Img }) => {
  return (
    <div className="-m-1 ">
      <Image src={Img} alt="Subs Image" />
    </div>
  );
};

export default SubsImage;

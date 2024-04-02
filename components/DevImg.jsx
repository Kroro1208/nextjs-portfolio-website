import Image from "next/image";

const DevImg = ({ containerStyles, iconStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill primary />
    </div>
  )
}

export default DevImg

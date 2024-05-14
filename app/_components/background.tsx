import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div>
      <Image
        src="/dota-2-bg.jpg"
        layout="fill"
        objectFit="cover"
        alt="dota 2 background"
      />
    </div>
  );
};

export default BackgroundImage;

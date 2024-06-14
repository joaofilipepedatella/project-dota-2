import heroesImage from "@/public/heroesImage.json";

interface HeroImageProps {
  hero: {
    localized_name: string;
    img: string;
  };
}

const HeroImage: React.FC<HeroImageProps> = ({ hero }) => {
  const heroImage = heroesImage.heroes.find(
    (image) => image.localized_name === hero.localized_name
  );

  return (
    <div className="flex flex-1 justify-center items-center w-1/3">
      <img
        src={heroImage?.url_vertical_portrait}
        alt={hero.localized_name}
        className="w-96 rounded-md shadow-inner"
      />
    </div>
  );
};

export default HeroImage;

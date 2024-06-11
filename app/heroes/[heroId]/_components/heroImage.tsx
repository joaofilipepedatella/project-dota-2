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
    <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        src={heroImage?.url_vertical_portrait}
        alt={hero.localized_name}
        className="w-96 rounded-md shadow-inner"
      />
    </div>
  );
};

export default HeroImage;

const fetchHeroData = async () => {
  try {
    const response = await fetch("/heroes.json");
    const heroStats = await response.json();
    console.log("HeroStats:", heroStats); // Adicionei um console.log aqui
    return heroStats;
  } catch (error) {
    console.error(error);
  }
};

const findHeroById = (heroId: number, heroAttributes: any[]) => {
  console.log("ID:", heroId); // Adicionei um console.log aqui
  const hero = heroAttributes.find((hero) => hero.id === heroId);
  return hero;
};

export { fetchHeroData, findHeroById };

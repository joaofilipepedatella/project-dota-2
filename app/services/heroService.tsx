const fetchHeroData = async () => {
  try {
    const response = await fetch("/heroes.json");
    const heroStats = await response.json();

    return heroStats;
  } catch (error) {
    console.error(error);
  }
};

const findHeroById = (heroId: number, heroAttributes: any[]) => {
  const hero = heroAttributes.find((hero) => hero.id === heroId);
  return hero;
};

export { fetchHeroData, findHeroById };

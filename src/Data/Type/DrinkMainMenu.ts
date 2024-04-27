import DrinkType from "./Drink";

type DrinkMainMenu = {
  title: string;
  subtitle: string | null;
  drinks: DrinkType[];
};

export default DrinkMainMenu;

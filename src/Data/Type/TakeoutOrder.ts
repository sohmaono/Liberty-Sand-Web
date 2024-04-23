import AddingMenuType from "./AddingMenu";
import DrinkType from "./Drink";
import MenuType from "./Menu";

type TakeoutOrderType = {
  id: number;
  menu: MenuType | null;
  drink: DrinkType | null;
  toppings: AddingMenuType[] | null;
  patty: AddingMenuType | null;
};

export default TakeoutOrderType;

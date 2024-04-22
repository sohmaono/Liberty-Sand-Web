import TakeoutOrderType from "../Type/TakeoutOrder";

export default function calcTakeoutSumPrice(
  takeoutOrder: TakeoutOrderType
): [number, number] {
  var price = 0;
  var priceWithoutTax = 0;
  if (takeoutOrder.menu) {
    price = takeoutOrder.menu.price;
    priceWithoutTax = takeoutOrder.menu.priceWithoutTax;
    if (takeoutOrder.drink) {
      price += takeoutOrder.drink.type === 0 ? 324 : 356;
      priceWithoutTax += takeoutOrder.drink.type === 0 ? 300 : 330;
    }
    if (takeoutOrder.toppings) {
      for (const topping of takeoutOrder.toppings) {
        price += topping.price;
        priceWithoutTax += topping.priceWithoutTax;
      }
    }
    if (takeoutOrder.patty) {
      price += takeoutOrder.patty.price;
      priceWithoutTax += takeoutOrder.patty.priceWithoutTax;
    }
  } else if (takeoutOrder.drink) {
    price = takeoutOrder.drink.price;
    priceWithoutTax = takeoutOrder.drink.priceWithoutTax;
  }
  return [price, priceWithoutTax];
}

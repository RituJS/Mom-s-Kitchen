function renderMenu() {
  const menuContent = document.createElement("div");
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Our Menu";
  menuContent.appendChild(menuTitle);

  const beverages = document.createElement("h4");
  beverages.textContent = "Coffee @ 30\nTea@ 20";
  menuContent.appendChild(beverages);

  const drinkItem = document.createElement("div");
  menuContent.appendChild(drinkItem);
  const drinkTitle = document.createElement("h4");
  drinkTitle.textContent = "Prantha:\nplain Prantha @ 20 \nAloo Parantha @ 30";
  drinkItem.appendChild(drinkTitle);
  const drinkPrice = document.createElement("h4");
  drinkPrice.textContent = "Dall/kadi/chole Rice @ 40";
  drinkItem.appendChild(drinkPrice);

  const drinkItem2 = document.createElement("div");
  menuContent.appendChild(drinkItem2);
  const drinkTitle2 = document.createElement("h4");
  drinkTitle2.textContent = "Economy Thali @ 100";
  drinkItem2.appendChild(drinkTitle2);
  const drinkPrice2 = document.createElement("h4");
  drinkPrice2.textContent = "Veg Rools @ 50";
  drinkItem2.appendChild(drinkPrice2);

  const drinkItem3 = document.createElement("div");
  menuContent.appendChild(drinkItem3);
  const drinkTitle3 = document.createElement("h4");
  drinkTitle3.textContent = "Malai Chaap Roll @ 60";
  drinkItem3.appendChild(drinkTitle3);
  const drinkPrice3 = document.createElement("h4");
  drinkPrice3.textContent = "Veg. Korma @ 150";
  drinkItem3.appendChild(drinkPrice3);

  const drinkItem4 = document.createElement("div");
  menuContent.appendChild(drinkItem4);
  const drinkTitle4 = document.createElement("h4");
  drinkTitle4.textContent = "Cheese Naan Gravy @ 200";
  drinkItem4.appendChild(drinkTitle4);
  const drinkPrice4 = document.createElement("h4");
  drinkPrice4.textContent = "Keema Naan Gravy";
  drinkItem4.appendChild(drinkPrice4);

  const food = document.createElement("h4");
  food.textContent = "Red/White/Pink Sauce Pasta @ 100";
  menuContent.appendChild(food);

  

  menuContent.classList.add("container");
  return menuContent;
}

export { renderMenu };

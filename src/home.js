import Picture from "./rest.jpg";

function renderHome() {
  // image
  const image = new Image();
  image.src = Picture;

  const homeContent = document.createElement("div");
  const title = document.createElement("h2");
  homeContent.appendChild(title);
  title.textContent = "Mom's Kitchen";
  const description = document.createElement("div");
  // homeContent.appendChild(description)
  description.classList.add("description");
  description.textContent ="100% Pure Veg Restaurant Mom\'s Kitchen is a prestigious brand name in the North Indian Food Restaurant. We are delivering happiness through tasty food since 2012 in Chandigarh. We are specialized in Soya Chaap and Traditional Punjabi Food. We at Mom\'s Kitchen work effortlessly to serve you the food with all your family values and a subtle touch of nostalgia so you miss your mom\'s food a little less. Meet us in Chandigarh, Zirakpur, Delhi.";
  const imageContainer = document.createElement("div");
  const imgDescContainer = document.createElement("div");
  imgDescContainer.classList.add("img-desc-container");
  imgDescContainer.append(description, imageContainer);
  homeContent.append(imgDescContainer);
  imageContainer.append(image);
  imageContainer.classList.add("img-container");
  const hours = document.createElement("div");
  homeContent.appendChild(hours);
  const hoursTitle = document.createElement("h3");
  hours.appendChild(hoursTitle);
  hoursTitle.textContent = "Hours";
  const timetable = document.createElement("div");
  hours.appendChild(timetable);
  timetable.innerHTML =
    "<p>Monday - Friday: 7am - 5pm</p><p>Saturday - Sunday: 7:30am - 4pm</p>";
  const location = document.createElement("div");
  homeContent.appendChild(location);
  const locationTitle = document.createElement("h3");
  location.appendChild(locationTitle);
  locationTitle.textContent = "Location";
  const address = document.createElement("p");
  location.appendChild(address);
  address.textContent = "Mom's Kitchen";
  // homeContent.appendChild(image)
  homeContent.classList.add("container");
  return homeContent;
}

export { renderHome };

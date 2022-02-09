const items = document.getElementsByClassName("item");
const indicatorsContainer = document.getElementById("indicators-container");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
let currentIndex = 0;
const slideToIndex = index => {
  currentIndex = index; // Update global index variable
  indicatorsContainer.getElementsByClassName("active")[0].className = "bullet"; // remove active class from the currently active indicator
  indicatorsContainer.getElementsByClassName("bullet")[index].className += " active"; // add active class to the indicator that should be active
  for (let i = index; i < items.length; i++) { // put next slide in first position and shift others until end of array
    items[i].className = `item item-${i - index}`;
  }
  for (let i = 0; i < index; i++) { // shift items from start until next slide
    items[i].className = `item item-${8 - index + i}`;
  }
}
const onIndicatorClick = e => {
  const target = e.target;
  if (target.className === "bullet") {
    slideToIndex(parseInt(e.target.getAttribute("data-index"), 10));
  }
};
const onLeftButtonClick = e => {
  const newIndex = currentIndex - 1;
  slideToIndex(newIndex < 0 ? 7 : newIndex);
};
const onRightButtonClick = e => {
  const newIndex = currentIndex + 1;
  slideToIndex(newIndex > 7 ? 0 : newIndex);
};
indicatorsContainer.addEventListener("click", onIndicatorClick);
leftButton.addEventListener("click", onLeftButtonClick);
rightButton.addEventListener("click", onRightButtonClick);

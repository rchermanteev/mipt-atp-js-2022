// let helloWorld = "Hello World!";
// const root: HTMLElement = document.getElementById("root")!;

// root.innerText = JSON.stringify(helloWorld);

const checkbox = document.querySelectorAll("input[type=checkbox]");
const conteiner = document.querySelector(".basket ol");
const price = document.querySelector(".price");

const handleClick = (event) => {
  if (event.target.checked) {
    const target = event.target;
    const element = document.createElement("li");
    const basketPrice = document.createElement("span");
    element.textContent = target.name;
    element.setAttribute("id", `basket_${target.id}`);
    element.classList.add("basket__item");
    element.setAttribute("data_price", target.getAttribute("data_price"));
    basketPrice.textContent = ` ${target.getAttribute("data_price")} р.`;
    element.appendChild(basketPrice);
    conteiner.appendChild(element);
    price.textContent =
      (parseFloat(price.textContent) +
      parseFloat(target.getAttribute("data_price"))).toString();
  } else {
    const element = document.querySelector(`#basket_${event.target.id}`);
    conteiner.removeChild(element);
    price.textContent =
      (parseFloat(price.textContent) -
      parseFloat(element.getAttribute("data_price"))).toString();
  }
};

checkbox.forEach((item) => {
  item.addEventListener("change", handleClick);
});

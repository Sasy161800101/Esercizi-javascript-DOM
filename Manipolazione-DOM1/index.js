function addProduct() {
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);
  ul.appendChild(li);
}

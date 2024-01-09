const ul=document.querySelector(".myUl")
const input=document.querySelector(".myInput")

const addProduct = () => {
  const value=input.value
  const li=document.createElement("li")
  li.innerHTML = `<input type="checkbox"/> <span>${value}</span>`
  ul.appendChild(li)
};

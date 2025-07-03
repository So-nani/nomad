const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
   console.log(h1.style.color);
   h1.style.color = "blue";
   console.log(h1.style.color);
}

// h1.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);
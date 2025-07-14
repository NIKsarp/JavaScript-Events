// --------------------------------------------
// ContextMenu Event Start

const button = document.getElementById(`button`);
const manyColor = [`cyan`, `magenta`, `yellow`];

button.addEventListener(`contextmenu`, (event) => {
  event.preventDefault()
  event.target.innerText = `✅ Right Clicked`;
  const color = manyColor[Math.floor(Math.random() * manyColor.length)];
  event.target.style.backgroundColor = color;
});

// ContextMenu Event End
// --------------------------------------------

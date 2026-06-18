// --------------------------------
// MouseLeave Event Start

const button = document.getElementById(`button`);
const manyColor = [`cyan`, `magenta`, `yellow`];

button.addEventListener(`mouseleave`, (e) => {
  e.target.innerText = `✅ Leaved`;
  const color = manyColor[Math.floor(Math.random() * manyColor.length)];
  e.target.style.backgroundColor = color;
});

// MouseLeave Event End
// --------------------------------

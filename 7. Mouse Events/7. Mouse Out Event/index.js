// --------------------------------
// MouseOut Event Start

const button = document.getElementById(`button`);
const manyColor = [`red`, `green`, `blue`];

button.addEventListener(`mouseout`, (e) => {
  e.target.innerText = `Out`;
  const color = manyColor[Math.floor(Math.random() * manyColor.length)];
  e.target.style.backgroundColor = color;
});

// MouseOut Event End
// --------------------------------

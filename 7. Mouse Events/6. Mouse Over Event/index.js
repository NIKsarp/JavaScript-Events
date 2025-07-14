// --------------------------------------------
// MouseOver Event Start

const button = document.getElementById(`button`);
const manyColor = [`red`, `green`, `blue`];

button.addEventListener(`mouseover`, (e) => {
  const color = manyColor[Math.floor(Math.random() * manyColor.length)];
  e.target.style.backgroundColor = color;

  console.log(color);

});

// MouseOver Event End
// --------------------------------------------

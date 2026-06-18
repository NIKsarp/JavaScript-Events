// --------------------------------
// MouseMove Event Start

const button = document.getElementById(`button`);
const manyColor = [`red`, `green`, `blue`];

button.addEventListener(`mousemove`, (e) => {
  const color = manyColor[Math.floor(Math.random() * manyColor.length)];
  e.target.style.backgroundColor = color;
  e.target.innerText = `🐁 Moved`;
});

// MouseMove Event End
// --------------------------------

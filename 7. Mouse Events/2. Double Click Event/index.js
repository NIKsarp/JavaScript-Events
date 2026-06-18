// --------------------------------
// DoubleClick Event Start

const button = document.getElementById(`button`);

button.addEventListener(`dblclick`, (e) => {
  e.target.innerText = `❤️❤️ Double Clicked`;
  e.target.style.scale = `0.7`;
});

// DoubleClick Event End
// --------------------------------

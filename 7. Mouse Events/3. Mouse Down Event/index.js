// --------------------------------
// MouseDown Event Start

const button = document.getElementById(`button`);

button.addEventListener(`mousedown`, (e) => {
  e.target.innerText = `Changed`;
  e.target.style.backgroundSize = `100% 100%`;
});

// MouseDown Event End
// --------------------------------

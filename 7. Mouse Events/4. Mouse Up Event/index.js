// --------------------------------------------
// MouseUp Event Start

const button = document.getElementById(`button`);

button.addEventListener(`mouseup`, (e) => {
  e.target.innerText = `Changed`;
  e.target.style.backgroundSize = `100% 100%`
});

// MouseUp Event End
// --------------------------------------------

// --------------------------------------------
// TouchMove Event Start

const button = document.getElementById(`button`);

button.addEventListener(`touchmove`, (e) => {
  e.target.innerText = `You moved it.`;
});

// TouchMove Event End
// --------------------------------------------

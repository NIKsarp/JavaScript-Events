// --------------------------------------------
// TouchStart Event Start

const button = document.getElementById(`button`);

button.addEventListener(`touchstart`, (e) => {
  e.target.innerText = `You Touch it.`;
});

// TouchStart Event End
// --------------------------------------------

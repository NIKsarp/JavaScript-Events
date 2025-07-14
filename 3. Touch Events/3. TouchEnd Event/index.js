// --------------------------------------------
// TouchEnd Event Start

const button = document.getElementById(`button`);

button.addEventListener(`touchend`, (e) => {
  e.target.innerText = `This is Touch End. 🔚`;
});

// TouchEnd Event End
// --------------------------------------------

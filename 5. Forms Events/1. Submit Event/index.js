// --------------------------------
// Submit Event Start

const form = document.getElementById(`form`);
const result = document.getElementById(`result`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  result.innerText = `Submitted`;
});

// Submit Event End
// --------------------------------

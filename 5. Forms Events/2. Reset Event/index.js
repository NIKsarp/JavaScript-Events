// --------------------------------
// Reset Event Start

const form = document.getElementById(`form`);
const result = document.getElementById(`result`);

form.addEventListener(`reset`, () => {
  result.innerText = `Resetted`;
});

// Reset Event End
// --------------------------------

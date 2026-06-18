// --------------------------------
// Select Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`select`, () => {
  result.innerText = `Text Selected`;
});

// Select Event End
// --------------------------------

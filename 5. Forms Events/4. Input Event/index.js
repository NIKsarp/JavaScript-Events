// --------------------------------------------
// Input Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`input`, () => {
  result.innerText = `Input triggered`;
});

// Input Event End
// --------------------------------------------

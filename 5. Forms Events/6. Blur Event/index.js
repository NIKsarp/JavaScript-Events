// --------------------------------
// Blur Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`blur`, () => {
  result.innerText = `Input box Blur triggered`;
});

// Blur Event End
// --------------------------------

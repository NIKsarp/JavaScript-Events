// --------------------------------
// Paste Event Start

const textarea = document.getElementById(`textarea`);
const result = document.getElementById(`result`);

textarea.addEventListener(`paste`, () => {
  result.innerText = `You Paste the text!`;
});

// Paste Event End
// --------------------------------

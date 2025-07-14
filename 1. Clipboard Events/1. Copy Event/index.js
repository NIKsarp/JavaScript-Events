// --------------------------------------------
// Copy Event Start

const textarea = document.getElementById(`textarea`);
const result = document.getElementById(`result`);

textarea.addEventListener(`copy`, () => {
  result.innerText = `You Copied the text!`;
});

// Copy Event End
// --------------------------------------------

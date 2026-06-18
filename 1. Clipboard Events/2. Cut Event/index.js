// --------------------------------
// Copy Event Start

const textarea = document.getElementById(`textarea`);
const result = document.getElementById(`result`);

textarea.addEventListener(`cut`, () => {
  result.innerText = `You Cut the text!`;
});

// Copy Event End
// --------------------------------

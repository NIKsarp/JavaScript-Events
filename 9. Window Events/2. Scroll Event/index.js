// --------------------------------
// Scroll Event Start

const textarea = document.getElementById(`textarea`);
const result = document.getElementById(`result`);

textarea.addEventListener(`scroll`, () => {
  result.innerHTML = `Textarea Scroll`;
});

// Scroll Event End
// --------------------------------

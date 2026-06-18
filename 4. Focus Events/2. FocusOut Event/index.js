// --------------------------------
// FocusOut Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`focusout`, () => {
  result.innerHTML = `You are FocusOut`;
});

// FocusOut Event End
// --------------------------------

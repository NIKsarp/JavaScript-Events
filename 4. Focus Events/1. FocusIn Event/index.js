// --------------------------------
// FocusIn Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`focusin`, () => {
  result.innerHTML = `You are in FocusIn`;
});

// FocusIn Event End
// --------------------------------

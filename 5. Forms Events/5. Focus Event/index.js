// --------------------------------
// Focus Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`focus`, () => {
  result.innerText = `Input box Focused`;
});

// Focus Event End
// --------------------------------

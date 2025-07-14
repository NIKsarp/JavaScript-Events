// --------------------------------------------
// Change Event Start

const select = document.getElementById(`select`);
const result = document.getElementById(`result`);

select.addEventListener(`change`, () => {
  result.innerText = `Changed`;
});

// Change Event End
// --------------------------------------------

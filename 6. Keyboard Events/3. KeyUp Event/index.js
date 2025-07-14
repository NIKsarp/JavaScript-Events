// --------------------------------------------
// KeyUp Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`keyup`, (event) => {
  result.innerHTML = `Your KeyUp Event is released: <span class="color">${event.key}</span>`;

  // Condition only for space button
  // Remove if you do not want
  // and check the result when click space button
  if (event.key === ` `) {
    result.innerHTML = `Your KeyUp Event is released: <span class="color">space</span> button`;
  }
});

// KeyUp Event End
// --------------------------------------------

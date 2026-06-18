// --------------------------------
// KeyDown Event Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`keydown`, (event) => {
  result.innerHTML = `Your KeyDown Event is pressed: <span class="color">${event.key}</span>`;

  // Condition only for space button
  // Remove if you do not want
  // and check the result when click space button
  if (event.key === ` `) {
    result.innerHTML = `Your KeyDown Event is pressed: <span class="color">space</span> button`;
  }
});

// KeyDown Event End
// --------------------------------

// --------------------------------
// KeyPress Event (Deprecated) Start

const input = document.getElementById(`input`);
const result = document.getElementById(`result`);

input.addEventListener(`keypress`, (event) => {
  result.innerHTML = `Your KeyPress Event (Deprecated) is pressed: <span class="color">${event.key}</span>`;

  // Condition only for space button
  // Remove if you do not want
  // and check the result when click space button
  if (event.key === ` `) {
    result.innerHTML = `Your KeyPress Event (Deprecated) is pressed: <span class="color">space</span> button`;
  }
});

// KeyPress Event (Deprecated) End
// --------------------------------

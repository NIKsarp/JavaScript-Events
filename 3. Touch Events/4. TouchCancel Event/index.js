// --------------------------------------------
// TouchCancel Event Start

const button = document.getElementById(`button`);

button.addEventListener(`touchcancel`, (e) => {
  e.target.innerText = `TouchCancelled ❌`;
});

// TouchCancel Event End
// --------------------------------------------

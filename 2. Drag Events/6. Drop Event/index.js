// --------------------------------
// Drop Event Start

const droppedBox = document.getElementById(`droppedBox`);

droppedBox.addEventListener(`dragover`, (e) => {
  e.preventDefault();
});

droppedBox.addEventListener(`drop`, (e) => {
  e.target.innerText = `Dropped`;
  e.target.style.backgroundColor = `#90ee90`;
});

// Drop Event End
// --------------------------------

// --------------------------------
// DragEnter Event Start

const box = document.getElementById(`box`);

box.addEventListener(`dragenter`, (e) => {
  e.target.innerText = `DragEntered`;
  e.target.style.backgroundColor = `#90ee90`;
});

// DragEnter Event End
// --------------------------------

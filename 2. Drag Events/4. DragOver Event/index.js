// --------------------------------
// DragOver Event Start

const box = document.getElementById(`box`);

box.addEventListener(`dragover`, (e) => {
  e.target.innerText = `DragOvered`;
  e.target.style.backgroundColor = `#90ee90`;
});

// DragOver Event End
// --------------------------------

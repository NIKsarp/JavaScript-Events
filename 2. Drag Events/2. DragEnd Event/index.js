// --------------------------------------------
// DragEnd Event Start

const box = document.getElementById(`box`);

box.addEventListener(`dragend`, (e) => {
  e.target.innerText = `DragEnded`;
  e.target.style.backgroundColor = `#90ee90`;
  
});

// DragEnd Event End
// --------------------------------------------

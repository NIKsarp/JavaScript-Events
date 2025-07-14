// --------------------------------------------
// DragStart Event Start

const box = document.getElementById(`box`);

box.addEventListener(`dragstart`, (e) => {
  e.target.innerText = `DragStarted`;
  e.target.style.backgroundColor = `#90ee90`;
  
});

// DragStart Event End
// --------------------------------------------

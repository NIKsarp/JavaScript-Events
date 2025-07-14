// --------------------------------------------
// DragLeave Event Start

const box = document.getElementById(`box`);

box.addEventListener(`dragleave`, (e) => {
  e.target.innerText = `DragLeaved`;
  e.target.style.backgroundColor = `#90ee90`;
  
});

// DragLeave Event End
// --------------------------------------------

const lis = document.getElementsByTagName('li');
let array = Array.prototype.slice.call(lis);
let position = 0;
let count = 3;

function next() { 
console.log(array.length);
if (position < array.length - 1) {
  console.log(position);
  if (position + count <= array.length - 1 - count) {
   position += count;
    } else {
    position = (array.length) - 3;
    }
    
    console.log(position);
    array.map((x, i) => {
      if (i < position) {
        x.style.display = "none";
      }
    });
  }
}

function prev() { 
    console.log(position);
if (position > 0) {
    position -= (position - count <= 0) ? position : count;
    array.map((x, i) => {
      if (i >= position) {
        x.style.display = "inline-block";
      }
    });
  }
}
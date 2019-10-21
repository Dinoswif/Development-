const fill = document.querySelector('.fill');
const fill2 = document.querySelector('.fill2');
const empties = document.querySelectorAll('.empty');


//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill2.addEventListener('dragstart2', dragStart2);
fill2.addEventListener('dragend2', dragEnd2);

//loop through empties and call drag events
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for(const empty of empties){
    empty.addEventListener('dragover2', dragOver2);
    empty.addEventListener('dragenter2', dragEnter2);
    empty.addEventListener('dragleave2', dragLeave2);
    empty.addEventListener('drop2', dragDrop2);
}

//Drag Functions
function dragStart(){
  //console.log('start');
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'),0);
}

function dragEnd(){
  //console.log('end');
  this.className= 'fill';
}

function dragOver(e){
  e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}

//Images 2

function dragStart2(){
    //console.log('start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'),0);
  }
  
  function dragEnd2(){
    //console.log('end');
    this.className= 'fill2';
  }
  
  function dragOver2(e){
    e.preventDefault();
  }
  
  function dragEnter2(e){
      e.preventDefault();
      this.className += ' hovered';
  }
  
  function dragLeave2(){
      this.className = 'empty';
  }
  
  function dragDrop2(){
      this.className = 'empty';
      this.append(fill2);
  }
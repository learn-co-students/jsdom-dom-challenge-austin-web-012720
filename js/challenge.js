const storedLikes = [];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('comment-form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();  
    addComments(event);
  });
  
  let timeID = setInterval(incrementTimer, 1000);
  
  let pauseButton = document.querySelector('#pause');
  let minusButton = document.querySelector('#minus');
  let plusButton = document.querySelector('#plus');
  let heartButton = document.querySelector('#heart');
  let submitButton = document.querySelector('#submit');
  
  pauseButton.addEventListener('click', (event) => {
    
    if (event.target.innerText == 'pause') {
      pauseButton.innerText = 'resume';
      minusButton.disabled = true;
      plusButton.disabled = true;
      heartButton.disabled = true;
      submitButton.disabled = true;
      
      clearTimeout(timeID);
    } else {
      pauseButton.innerText = 'pause';
      minusButton.disabled = false;
      plusButton.disabled = false;
      heartButton.disabled = false;
      submitButton.disabled = false;
      timeID = setInterval(incrementTimer, 1000);
    };
    
  });
  
  heartButton.addEventListener('click', (event) => {
    addLikes(event);
  });

  plusButton.addEventListener('click', event => {
    plusCounter(event);  
  });

  minusButton.addEventListener('click', (event) => {
    decreaseCounter(event);
  });
  

});

function incrementTimer() {
  let counter = document.querySelector('#counter');
  let number = parseInt(counter.innerText); 
  counter.innerText = number + 1  
};


function addComments(event) {
  const commentContainer = document.getElementById('list');

  let commentInput = document.getElementById('comment-input');
  
  let li = document.createElement('li');
  //li.innerText = event.target.firstElementChild.value;
  li.innerText = commentInput.value;
  commentContainer.appendChild(li)
  commentInput.value = "";
};


function addLikes(event) {
  let counter = document.querySelector('#counter');
  let number = parseInt(counter.innerText);
  storedLikes.push(number);
  const likesContainer = document.querySelector('.likes');
  let li = document.createElement('li');

  let x = numberOfLikes(number);
  
  if (x == 1) {
    li.id = number;
    li.innerText = `${number} has been liked 1 time`; 
  } else {
    li = document.getElementById(`${number}`)
    li.innerText = `${number} has been liked ${x} times`;
  };
  
  likesContainer.appendChild(li);
};

function numberOfLikes(number) {
  let x = storedLikes.filter(num => num == number).length
  return x
};

function plusCounter() {
  incrementTimer();
};

function decreaseCounter() {
  let counter = document.querySelector('#counter');
  let number = parseInt(counter.innerText); 
  counter.innerText = number - 1
};

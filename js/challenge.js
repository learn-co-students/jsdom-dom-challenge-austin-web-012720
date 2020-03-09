document.addEventListener("DOMContentLoaded", function(){
  timer();
});
document.getElementById('plus').addEventListener('click', incrementCounter);
document.getElementById('minus').addEventListener('click', decrementCounter);
document.getElementById('heart').addEventListener('click', likeNum);

let count = 0;

function timer(){
  let timer = setInterval(function(){
    count++;
    document.getElementById('counter').innerText = count;
  }, 1000);
};

function incrementCounter(){
  count++;
  document.getElementById('counter').innerText = count;
};

function decrementCounter(){
  count--;
  document.getElementById('counter').innerText = count;
}

function likeNum(){
  let numNode = document.getElementById('likes');
  let num = document.createElement('li');
  numNode.appendChild(document.createTextNode(count));
  numNode.appendChild(num);
}

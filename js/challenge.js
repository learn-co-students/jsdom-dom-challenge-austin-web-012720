document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const heart = document.getElementById('heart');
    const pause = document.getElementById('pause');
    const ul = document.getElementById('likes');


    const submit = document.getElementById('submit');
    const input = document.getElementById('comment-input');
    const ulComments = document.getElementById('comments');


    // plus.addEventListener("click", plusIncrement);

    counter.addEventListener("load", function() {
        let i = 0;
        
        function increment(){
            i = i % 360 + 1;
        }
        let interval = setInterval(increment, 1000);
        counter.innerText = interval
       
    });

    submit.addEventListener("click", function(e) {
        e.preventDefault();
        let comment = input.value;
        let li = document.createElement('li');
        li.textContent = comment;
        ulComments.appendChild(li);

    });

    count = 0;

    

    heart.addEventListener("click", function() {
        const li = document.createElement('li');

        li.innerText = count;
        ul.appendChild(li);

    });

    plus.addEventListener("click", function() {
        let i = parseInt(counter.textContent);
        i = i + 1;
        counter.innerText = i;
        count++;
    });

    minus.addEventListener("click", function() {
        let i = parseInt(counter.textContent);
        i = i - 1;
        counter.innerText = i;
        count = count - 1;
    });


  

    
    
});

// let i = 0;
// let interval = setInterval(counterIncrement, 1000);

// const counterIncrement = (event) => {
//     i = i % 360 +1;
// }

// const plusIncrement = (event) => {
//     const counter = document.getElementById('counter');
//     counter.innerText = 1;
// }
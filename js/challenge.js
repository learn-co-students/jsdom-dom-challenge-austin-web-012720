document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById("counter");
    let currentNum = parseInt(counter.innerText, 10);

    let minusBtn = document.getElementById("minus");
    let plusBtn = document.getElementById("plus");
    let heartBtn = document.getElementById("heart");
    let pauseBtn = document.getElementById("pause");
    let submitBtn = document.getElementById("submit");

    let likesList = document.getElementsByClassName("likes")[0];

    let timer = setInterval(myTimer, 1000);
    clickToAdd();
    clickToSubtract();
    likeANumber();
    pauseCounter();
    addComment();

    function myTimer() {
        counter.innerText = currentNum += 1
    }

    function clickToAdd() {
      plusBtn.addEventListener("click", function(event) {
         counter.innerText = currentNum += 1
         })
    }

    function clickToSubtract() {
        minusBtn.addEventListener("click", function(event) {
            counter.innerText = currentNum -= 1
        })
    }
    
    // Would be better if the likes increased in number
    function likeANumber() {              
        heartBtn.addEventListener("click", function(event){
            let numOfLikes = 0
            numOfLikes += 1

            let li = document.createElement("li");
            li.innerText = `Like # ${numOfLikes}`
            likesList.appendChild(li)
        })
    }

    // Still need to make the "resume" button work properly
    function pauseCounter() {
        pauseBtn.addEventListener("click", function(event) {
            clearInterval(timer)

            pauseBtn.value == "pause"
            minusBtn.disabled = true;
            plusBtn.disabled = true; 
            heartBtn.disabled = true;

            pauseBtn.value = "resume";
            pauseBtn.innerText = "resume";
            
            pauseBtn.addEventListener("click", function(event) {
                minusBtn.disabled = false;
                plusBtn.disabled = false; 
                heartBtn.disabled = false;
    
                pauseBtn.value = "pause";
                pauseBtn.innerText = "pause";
                setInterval(myTimer, 1000);
            })
                
            })
    
    }

    function addComment() {
        submitBtn.addEventListener("click", function(event) {
            event.preventDefault();
            let commentInput = document.querySelector("#comment-input").value;
            let newComment = document.createElement("p")
            let commentsList = document.getElementById("list");
            
            newComment.innerText = commentInput
            commentsList.appendChild(newComment)
        })
    }

});
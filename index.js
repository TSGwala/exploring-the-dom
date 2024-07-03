document.addEventListener('DOMContentLoaded', () => {
    console.log(document);

    const myMessage = document.querySelector('.myMessage');
    console.log(myMessage);

    // Show a message in the DOM after 3 seconds
    setTimeout(() => {
        myMessage.innerText = 'This is a message in the DOM!';
    }, 3000);

    // Show a message when the button is clicked
    const theMessageButton = document.querySelector('.theMessageButton');
    theMessageButton.addEventListener('click', () => {
        const inputBox = document.querySelector('.theInputValue');
        if (inputBox.value.trim().length > 0) {
            myMessage.innerText = inputBox.value;
            setTimeout(() => {
                myMessage.innerText = '';
            }, 3000);
        }
    });

    // Clear the message when the clear button is clicked
    const clearMessageButton = document.querySelector('.clearMessageButton');
    clearMessageButton.addEventListener('click', () => {
        myMessage.innerText = '';
    });

    // Toggle dark mode on message div when clicked
    myMessage.addEventListener('click', () => {
        myMessage.classList.toggle('darkmode');
    });

    // Display a list of fruits
    const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
    const fruitList = document.querySelector(".fruits");

    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.innerText = fruit;
        fruitList.appendChild(li);
    });
});

let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"},
    {name: "grape", color: "purple", shape: "round", emoji: "🍇"},
    {name: "blueberry", color: "blue", shape: "round", emoji: "🫐"},
    {name: "watermelon", color: "green", shape: "round", emoji: "🍉"}
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
}



function addFruitCard(fruit) {
    let newFruitCard = document.createElement('div')

    let fruitHeading = document.createElement('h3');
    fruitHeading.textContent = fruit.name;
    newFruitCard.appendChild(fruitHeading);
    
    let fruitColor = document.createElement('p');
    fruitColor.textContent = `Color: ${fruit.color}`;
    fruitColor.style.color = fruit.color;
    newFruitCard.appendChild(fruitColor);
    
      let fruitContainer = document.querySelector('#cards');
      newFruitCard.classList.add('fruitCard');
      fruitContainer.appendChild(newFruitCard);

      let fruitShape = document.createElement('p');
      fruitShape.textContent = `Shape: ${fruit.shape}`;
      newFruitCard.appendChild(fruitShape);

      let fruitEmoji = document.createElement('p');
      fruitEmoji.textContent = `Emoji: ${fruit.emoji}`;
      newFruitCard.appendChild(fruitEmoji);
    }

function runProgram() {
    console.log("Program is running");

    for(const fruit of fruitObjects) {
        addFruitCard(fruit);
    }

    let apple = fruitsObjects[0];
    addFruitCard(apple);
    addFruitCard(fruitObjects[1]);
}


document.addEventListener('DOMContentLoaded', runProgram);
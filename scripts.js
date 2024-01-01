function checkFood() {
    const pet = document.getElementById('pet').value;
    const food = document.getElementById('food').value.toLowerCase();
  
    const foodsNotAllowed = {
      dog: ['chocolate', 'grapes', 'onion'],
      cat: ['chocolate', 'lilies', 'onion'],
      rabbit: ['almonds', 'avocado', 'rhubarb'],
      hamster: ['almonds', 'citrus fruits', 'garlic'],
      fish: ['bread', 'human food', 'processed foods']
    };
  
    if (foodsNotAllowed[pet] && foodsNotAllowed[pet].includes(food)) {
      document.getElementById('result').innerText = `No, ${pet}s should not eat ${food}.`;
    } else {
      document.getElementById('result').innerText = `Yes, ${pet}s can eat ${food}.`;
    }
  }
  
  document.getElementById('checkButton').addEventListener('click', checkFood);
  
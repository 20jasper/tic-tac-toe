class TicTacToe {
  addEventListeners() {
    const keys = document.querySelector('.gamearea');
    keys.addEventListener('click', event => {
      const { target } = event;
      const { value } = target;
      if (!target.matches('button')) {
        return;
      } else {
        //add character to array
        addCharacter(currentPlayer, value);
        //check to see if character won/draw
        didSomeoneWin(currentPlayer)
        //change character 
        currentPlayer = changeCharacter(currentPlayer)
      }
    });
  }
}

const ticTacToe = new TicTacToe
ticTacToe.addEventListeners()

let currentPlayer = firstPlayer()
document.querySelector('h3').innerText = `${currentPlayer.toUpperCase()}'s turn`

//get random first player
function firstPlayer() {
  if (Math.random() * 2 > 1) {
    return 'x'
  }
  return 'o'
}



const arr = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function addCharacter(character, value) {
  if (value == 1) {
    arr[0][0] = character;
    document.getElementById('box1').innerHTML = character
    document.getElementById('box1').setAttribute('disabled', '')
  };
  if (value == 2) {
    arr[0][1] = character;
    document.getElementById('box2').innerHTML = character
    document.getElementById('box2').setAttribute('disabled', '')
  };
  if (value == 3) {
    arr[0][2] = character;
    document.getElementById('box3').innerHTML = character
    document.getElementById('box3').setAttribute('disabled', '')
  };
  if (value == 4) {
    arr[1][0] = character;
    document.getElementById('box4').innerHTML = character
    document.getElementById('box4').setAttribute('disabled', '')
  };
  if (value == 5) {
    arr[1][1] = character;
    document.getElementById('box5').innerHTML = character
    document.getElementById('box5').setAttribute('disabled', '')
  };
  if (value == 6) {
    arr[1][2] = character;
    document.getElementById('box6').innerHTML = character
    document.getElementById('box6').setAttribute('disabled', '')
  };
  if (value == 7) {
    arr[2][0] = character;
    document.getElementById('box7').innerHTML = character
    document.getElementById('box7').setAttribute('disabled', '')
  };
  if (value == 8) {
    arr[2][1] = character;
    document.getElementById('box8').innerHTML = character
    document.getElementById('box8').setAttribute('disabled', '')
  };
  if (value == 9) {
    arr[2][2] = character;
    document.getElementById('box9').innerHTML = character
    document.getElementById('box9').setAttribute('disabled', '')
  };
  return arr;
}
function changeCharacter(character) {

  let newCharacter = ''

  if (character == 'x') {
    newCharacter += 'o'
  }
  if (character == 'o') {
    newCharacter += 'x'
  }
  document.querySelector('h3').innerText = `${newCharacter.toUpperCase()}'s turn`

  return newCharacter
}

let count = 0
function didSomeoneWin(character) {

  // horizontal win check
  for (let y = 0; y < arr.length; y++) {
    const row = arr[y];
    if (row[0] == character && row[1] == character && row[2] == character) {
      return someoneWon(character);
    }
  };
  //vertical win check
  //arr[0][0], arr[1][0], arr[2][0]
  for (let x = 0; x < arr.length; x++) {
    if (arr[0][x] == character && arr[1][x] == character && arr[2][x] == character) {
      return someoneWon(character);
    }
  };
  //diagonal win check
  //0,0 1,1 2,2
  //2,0 1,1 0,2
  if (arr[0][0] === character && arr[1][1] === character && arr[2][2] === character) {
    return someoneWon(character);
  }
  if (arr[2][0] == character && arr[1][1] == character && arr[0][2] == character) {
    return someoneWon(character);
  }
  //if all boxes are filled, it's a draw
  if (count == 8) {
    document.querySelector('h2').innerText = `IT'S A TIE!`
    gameOver()
  }
  //else change to next player's turn
  count++
};

function gameOver() {
  document.querySelector('main').style.filter = 'blur(5px)';
  // document.querySelector('h2').classList.add('animation');
  document.querySelector('h2').classList.toggle('hidden');

}

function someoneWon(character) {
  document.querySelector('h2').innerText = `PLAYER ${character.toUpperCase()} WON!`;
  gameOver()

  //disable all boxes
  document.getElementById(`box1`).setAttribute('disabled', '')
  document.getElementById(`box2`).setAttribute('disabled', '')
  document.getElementById(`box3`).setAttribute('disabled', '')
  document.getElementById(`box4`).setAttribute('disabled', '')
  document.getElementById(`box5`).setAttribute('disabled', '')
  document.getElementById(`box6`).setAttribute('disabled', '')
  document.getElementById(`box7`).setAttribute('disabled', '')
  document.getElementById(`box8`).setAttribute('disabled', '')
  document.getElementById(`box9`).setAttribute('disabled', '')
}
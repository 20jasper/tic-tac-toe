class TicTacToe {
  constructor() {
    this.firstPlayer = this.firstPlayer()
    this.currentPlayer = this.firstPlayer
    this.gameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.turn = 0
  }
  startGame() {
    //listen for clicks on boxes
    this.addEventListeners()
  }
  addEventListeners() {
    const keys = document.querySelector('.gamearea');
    keys.addEventListener('click', event => {
      const { target } = event;
      const { value } = target;
      //if box hasn't already been clicked
      if (target.matches('button')) {
        //add character to array
        this.addCharacter(value);
        //check to see if character won/draw
        this.didSomeoneWin()
      }
    });
  }
  firstPlayer() {
    let firstPlayer = 'o'
    if (Math.random() * 2 > 1) {
      firstPlayer = 'x'
    }
    document.querySelector('h3').innerText = `${firstPlayer.toUpperCase()}'s turn`
    return firstPlayer
  }
  nextTurn() {
    //increment turn counter
    this.turn++
    this.changeCurrentPlayer()
  }
  changeCurrentPlayer() {
    // change current character
    if (this.currentPlayer == 'x') {
      this.currentPlayer = 'o'
    } else if (this.currentPlayer == 'o') {
      this.currentPlayer = 'x'
    }
    document.querySelector('h3').innerText = `${this.currentPlayer.toUpperCase()}'s turn`
  }
  addCharacter(value) {
    if (value == 1) {
      ticTacToe.gameBoard[0][0] = this.currentPlayer;
      document.getElementById('box1').innerHTML = this.currentPlayer
      document.getElementById('box1').setAttribute('disabled', '')
    };
    if (value == 2) {
      ticTacToe.gameBoard[0][1] = this.currentPlayer;
      document.getElementById('box2').innerHTML = this.currentPlayer
      document.getElementById('box2').setAttribute('disabled', '')
    };
    if (value == 3) {
      ticTacToe.gameBoard[0][2] = this.currentPlayer;
      document.getElementById('box3').innerHTML = this.currentPlayer
      document.getElementById('box3').setAttribute('disabled', '')
    };
    if (value == 4) {
      ticTacToe.gameBoard[1][0] = this.currentPlayer;
      document.getElementById('box4').innerHTML = this.currentPlayer
      document.getElementById('box4').setAttribute('disabled', '')
    };
    if (value == 5) {
      ticTacToe.gameBoard[1][1] = this.currentPlayer;
      document.getElementById('box5').innerHTML = this.currentPlayer
      document.getElementById('box5').setAttribute('disabled', '')
    };
    if (value == 6) {
      ticTacToe.gameBoard[1][2] = this.currentPlayer;
      document.getElementById('box6').innerHTML = this.currentPlayer
      document.getElementById('box6').setAttribute('disabled', '')
    };
    if (value == 7) {
      ticTacToe.gameBoard[2][0] = this.currentPlayer;
      document.getElementById('box7').innerHTML = this.currentPlayer
      document.getElementById('box7').setAttribute('disabled', '')
    };
    if (value == 8) {
      ticTacToe.gameBoard[2][1] = this.currentPlayer;
      document.getElementById('box8').innerHTML = this.currentPlayer
      document.getElementById('box8').setAttribute('disabled', '')
    };
    if (value == 9) {
      ticTacToe.gameBoard[2][2] = this.currentPlayer;
      document.getElementById('box9').innerHTML = this.currentPlayer
      document.getElementById('box9').setAttribute('disabled', '')
    };
  }
  didSomeoneWin() {
    // horizontal win check
    for (let y = 0; y < ticTacToe.gameBoard.length; y++) {
      const row = ticTacToe.gameBoard[y];
      if (row[0] == this.currentPlayer && row[1] == this.currentPlayer && row[2] == this.currentPlayer) {
        this.someoneWon();
      }
    };
    //vertical win check
    for (let x = 0; x < ticTacToe.gameBoard.length; x++) {
      if (ticTacToe.gameBoard[0][x] == this.currentPlayer && ticTacToe.gameBoard[1][x] == this.currentPlayer && ticTacToe.gameBoard[2][x] == this.currentPlayer) {
        return this.someoneWon();
      }
    };
    //diagonal win check
    if (ticTacToe.gameBoard[0][0] === this.currentPlayer && ticTacToe.gameBoard[1][1] === this.currentPlayer && ticTacToe.gameBoard[2][2] === this.currentPlayer) {
      return this.someoneWon();
    }
    if (ticTacToe.gameBoard[2][0] == this.currentPlayer && ticTacToe.gameBoard[1][1] == this.currentPlayer && ticTacToe.gameBoard[0][2] == this.currentPlayer) {
      return this.someoneWon();
    }
    //if all boxes are filled, it's a draw
    if (this.turn == 8) {
      document.querySelector('h2').innerText = `IT'S A TIE!`
      return this.gameOver()
    }
    //change character 
    this.nextTurn()
  };
  someoneWon() {
    document.querySelector('h2').innerText = `PLAYER ${this.currentPlayer.toUpperCase()} WON!`;
    this.gameOver()

    //disable all boxes
    for (let i = 1; i <= 9; i++) {
      document.getElementById(`box${i}`).setAttribute('disabled', '')
    }
  }
  gameOver() {
    document.querySelector('main').style.filter = 'blur(5px)';
    document.querySelector('h2').classList.toggle('hidden');
  }
}

const ticTacToe = new TicTacToe
ticTacToe.startGame()






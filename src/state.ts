type Plays = "rock" | "paper" | "scissors";

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: [],
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("score");
    if (JSON.parse(localData) != null) {
      this.setState(JSON.parse(localData));
    }
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
    localStorage.setItem("score", JSON.stringify(newState));
  },

  setPlay(playerPlay, computerPlay) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = playerPlay;
    currentState.currentGame.computerPlay = computerPlay;
    currentState.history.push({
      player: currentState.currentGame.myPlay,
      computer: currentState.currentGame.computerPlay,
    });
    this.setState(currentState);
  },

  whoWins(playerPlay, computerPlay) {
    const win = [
      playerPlay == "scissors" && computerPlay == "paper",
      playerPlay == "rock" && computerPlay == "scissors",
      playerPlay == "paper" && computerPlay == "rock",
    ];

    const lose = [
      playerPlay == "scissors" && computerPlay == "rock",
      playerPlay == "rock" && computerPlay == "paper",
      playerPlay == "paper" && computerPlay == "scissors",
    ];

    if (win.includes(true)) {
      return 1;
    } else if (lose.includes(true)) {
      return -1;
    } else {
      return 0;
    }
  },

  getWhoWins() {
    const currentGame = this.getState().currentGame;
    const playerPlayB = currentGame.myPlay;
    const computerPlayB = currentGame.computerPlay;
    return this.whoWins(playerPlayB, computerPlayB);
  },

  getHistoryOfPoints() {
    var player = 0;
    var computer = 0;
    const currentHistory = this.getState().history;
    for (const play of currentHistory) {
      if (this.whoWins(play.player, play.computer) == 1) {
        player++;
      }
      if (this.whoWins(play.player, play.computer) == -1) {
        computer++;
      }
    }
    return {
      player,
      computer,
    };
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };

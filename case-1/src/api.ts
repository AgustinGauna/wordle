const WORDS = ["WRONG", "RIGHT", "WORLD", "WORMS", "READS", "KILLS", "SUNNY", "WINDY", "ACTOR", "ABOVE", "ABOUT", "AFTER", "ABUSE", "ADMIT", "ADOPT", "ADULT", "AGREE", "AGENT", "AHEAD", "DREAM", "DOUBT", "DRAMA", "LEAVE", "SHEET", "SLEEP", "VIRUS", "VISIT"];

const api = {
  word: {
    random: (): Promise<string> => // CANDIDATE
      new Promise((resolve) =>
        setTimeout(() => resolve(WORDS[Math.floor(Math.random() * WORDS.length)]), 1000),
      ),
  },
};

export const keyboard = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","Enter","z","x","c","v","b","n","m"];

export default api;

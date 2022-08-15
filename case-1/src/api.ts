const WORDS = ["WRONG", "RIGHT", "WORLD", "WORMS", "GONCY", "BELEN"];

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

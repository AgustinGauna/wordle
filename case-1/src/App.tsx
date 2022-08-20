import {useEffect, useState} from "react";
import api, {keyboard} from "./api";
import Keyboard from "./keyboard/Keyboard";

function App() {
  const [answer, setAnswer] = useState("")
  const [turn, setTurn] = useState<number>(0);
  const [status, setStatus] = useState<"playing" | "finished">("playing");
  const [words, setWords] = useState<string[][]>(() =>
    Array.from({length: 6}, () => new Array(5).fill("")),
  );
  const handleKeyDown = (event: KeyboardEvent) => {
    if(status === "finished"){
      switch(event.key){
        case "Enter":{
          setStatus("playing")
          setWords(() =>
          Array.from({length: 6}, () => new Array(5).fill("")),)
          setTurn(0)
          api.word.random().then((palabra)=>{
            setAnswer(palabra)
      
          })
        }
      }
    }
    if (status === "playing") {
      switch (event.key) {
        case "Enter": {
          if (words[turn].some((letter) => letter === "")) {
            return;
          }

          if (words[turn].join("") === answer) {
            setStatus("finished");

          }

          setTurn((turn) => turn + 1);

          return;
        }
        case "Backspace": {
          let firstEmptyIndex = words[turn].findIndex((letter) => letter === "");

          if (firstEmptyIndex === -1) {
            firstEmptyIndex = words[turn].length;
          }

          words[turn][firstEmptyIndex - 1] = "";

          setWords(words.slice());

          return;
        }
        default: {
          if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
            const firstEmptyIndex = words[turn].findIndex((letter) => letter === "");

            if (firstEmptyIndex === -1) return;

            words[turn][firstEmptyIndex] = event.key.toUpperCase();

            setWords(words.slice());

            return;
          }
        }
      }
    }
  };

  useEffect(()=>{
    api.word.random().then((palabra)=>{
      setAnswer(palabra)

    })
  },[])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  useEffect(()=>{
    
  })

 

  return (
    <main className="board">
      <h1>Wordle clon</h1>
      {words.map((word, wordIndex) => (
        <section key={wordIndex} className="word">
          {word.map((letter, letterIndex) => {
            const isCorrect = letter && wordIndex < turn && letter === answer[letterIndex];
            const isPresent = letter && wordIndex < turn && letter !== answer[letterIndex] && answer.includes(letter)

            return (
              <article key={letterIndex} className={`letter ${isPresent && "present"} ${isCorrect && "correct"}`}>
                {letter}
              </article>
            );
          })}
        </section>
      ))}

        <Keyboard/>

    </main>
  );
}

export default App;

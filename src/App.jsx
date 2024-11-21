import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [keypress, setKeypress] = useState(""); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event);
      setKeypress(event.key);
      const keyPressAdd = document.getElementById(`Key${String(event.key).toUpperCase()}`);
      keyPressAdd.classList.add('keyPress')

      setTimeout(() => {
        const keyPressRemove = document.getElementById(`Key${String(event.key).toUpperCase()}`);
        keyPressRemove.classList.remove('keyPress')        
      },100)
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard">
      <div className="row">
        <div className="key" id="KeyQ">
          Q
        </div>
        <div className="key" id="KeyW">
          W
        </div>
        <div className="key" id="KeyE">
          E
        </div>
        <div className="key" id="KeyR">
          R
        </div>
        <div className="key" id="KeyT">
          T
        </div>
        <div className="key" id="KeyY">
          Y
        </div>
        <div className="key" id="KeyU">
          U
        </div>
        <div className="key" id="KeyI">
          I
        </div>
        <div className="key" id="KeyO">
          O
        </div>
        <div className="key" id="KeyP">
          P
        </div>
      </div>
      <div className="row">
        <div className="key" id="KeyA">
          A
        </div>
        <div className="key" id="KeyS">
          S
        </div>
        <div className="key" id="KeyD">
          D
        </div>
        <div className="key" id="KeyF">
          F
        </div>
        <div className="key" id="KeyG">
          G
        </div>
        <div className="key" id="KeyH">
          H
        </div>
        <div className="key" id="KeyJ">
          J
        </div>
        <div className="key" id="KeyK">
          K
        </div>
        <div className="key" id="KeyL">
          L
        </div>
      </div>
      <div className="row">
        <div className="key" id="KeyZ">
          Z
        </div>
        <div className="key" id="KeyX">
          X
        </div>
        <div className="key" id="KeyC">
          C
        </div>
        <div className="key" id="KeyV">
          V
        </div>
        <div className="key" id="KeyB">
          B
        </div>
        <div className="key" id="KeyN">
          N
        </div>
        <div className="key" id="KeyM">
          M
        </div>
      </div>
    </div>
  );
}

export default App;

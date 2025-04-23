import { useState } from "react";
import MessagesList from "./MessageList";
import "./message.css";

function TnemeSwitcher() {
    const [theme, setTheme] = useState("light");

    function switchTheme () {
      if (theme === "light") {
        setTheme("dark");
        document.querySelector("body").style.backgroundColor = "black";
      } else {
        setTheme("light");
        document.querySelector("body").style.backgroundColor = "white";
      }
}

return (
    <>
        <button onClick={switchTheme}>switchTheme</button>
        <MessagesList themeColor={theme} />
    </>
)
}
export default TnemeSwitcher;
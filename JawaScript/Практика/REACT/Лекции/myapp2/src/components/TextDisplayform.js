import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function TextDisplayform() {
    const [text, setText] = useState("");
    const [PrintedText, setPrintedText] = useState("");

    const handleText = (event) => {
        event.preventDefault();
        setPrintedText(text);
        setText("");
    };

    return (
        <div>
            <TextField
            label="введите текст"
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            margin="normal" />
            <Button
            variant="contained"
            color="primary"
            onClick={handleText}
            style={{ marginBottom: 20}}>Отобразить текст</Button>
            <h4>{PrintedText}</h4>
        </div>
    )

}
export default TextDisplayform;
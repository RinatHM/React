import { PropTypes } from "prop-types";

export default function Message({text, time, author, themeColor}) {
    return (
        <>
            <h4 className={themeColor === "light" ? "light" : "dark"}>
            Autor № {author}</h4>
            <p className={themeColor === "light" ? "light" : "dark"}>Post time: {time}</p>
            <p className={themeColor === "light" ? "light" : "dark"}>{text}</p>
        </>
      );
}
 Message.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    author: PropTypes.number.isRequired,
    themeColor: PropTypes.string.isRequired,
 };
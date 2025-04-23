import { messages } from "./data";
import Message from "./message";
import { PropTypes } from "prop-types";

function MessagesList({ themeColor }) {
    return ( 
        <>
            {messages.map((message) => (
                <Message themeColor={themeColor} key={message.id} {...message} />
            ))}
        </>
     );
}

MessagesList.propTypes = {
    themeColor: PropTypes.string,
};
export default MessagesList;
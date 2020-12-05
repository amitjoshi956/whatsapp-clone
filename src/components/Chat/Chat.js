import "./Chat.css"
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic } from "@material-ui/icons"
const { Avatar, IconButton } = require("@material-ui/core")

const Chat = () => {
    const sendMessage = () => { }

    return (
        <div className="Chat">
            <div className="Chat_Header">
                <Avatar />

                <div className="Chat_HeaderInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="Chat_HeaderRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="Chat_Body">
                <p className="Chat_Message">
                    <span className="Chat_Name">Jethalal</span>
                    This is a message
                    <span className="Chat_Timestamp">
                        {new Date().toString()}
                    </span>
                </p>
                <p className="Chat_Message Chat_Reciever">
                    <span className="Chat_Name">Jethalal</span>
                    This is a message
                    <span className="Chat_Timestamp">
                        {new Date().toString()}
                    </span>
                </p>
                <p className="Chat_Message">
                    <span className="Chat_Name">Jethalal</span>
                    This is a message
                    <span className="Chat_Timestamp">
                        {new Date().toString()}
                    </span>
                </p>
            </div>

            <div className="Chat_Footer">
                <InsertEmoticon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
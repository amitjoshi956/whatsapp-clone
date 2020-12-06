import * as classes from "./ChatRoom.module.css"
import ChatRoomHeader from "./ChatRoomHeader/ChatRoomHeader"
import ChatRoomBody from "./ChatRoomBody/ChatRoomBody"
import ChatRoomFooter from "./ChatRoomFooter/ChatRoomFooter"

const ChatRoom = () => {

    return (
        <div className={classes.ChatRoom}>
            <ChatRoomHeader />
            <ChatRoomBody />
            <ChatRoomFooter />
        </div>
    )
}

export default ChatRoom
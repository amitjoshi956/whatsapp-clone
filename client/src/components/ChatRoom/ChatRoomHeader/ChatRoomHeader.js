import * as classes from './ChatRoomHeader.module.css'
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons"
const { Avatar, IconButton } = require("@material-ui/core")

const ChatRoomHeader = () => {
    return (
        <div className={classes.ChatRoomHeader}>
            <Avatar />

            <div className={classes.ChatRoomHeaderInfo}>
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
    )
}

export default ChatRoomHeader

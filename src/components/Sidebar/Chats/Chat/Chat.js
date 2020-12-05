import { Avatar } from "@material-ui/core"
import * as classes from "./Chat.module.css"

const SidebarChat = () => {
    return (
        <div className={classes.Chat}>
            <Avatar />
            <div className={classes.ChatInfo}>
                <h2>Room name</h2>
                <p>This is the last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat

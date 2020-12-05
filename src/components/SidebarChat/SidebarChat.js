import { Avatar } from "@material-ui/core"
import "./SidebarChat.css"

const SidebarChat = () => {
    return (
        <div className="SidebarChat">
            <Avatar />
            <div className="SidebarChat_Info">
                <h2>Room name</h2>
                <p>This is the last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat

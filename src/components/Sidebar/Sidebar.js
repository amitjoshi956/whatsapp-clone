import './Sidebar.css'
import { IconButton, Avatar } from '@material-ui/core'
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons'
import SidebarChat from '../SidebarChat/SidebarChat'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className='Sidebar_Header'>
                <Avatar />
                <div className='Sidebar_HeaderRight'>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="Sidebar_Search">
                <div className="Sidebar_SearchContainer">
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type="text" />
                </div>
            </div>

            <div className="Sidebar_Chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
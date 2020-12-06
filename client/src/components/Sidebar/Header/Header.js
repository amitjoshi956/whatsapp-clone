import * as classes from './Header.module.css'
import { IconButton, Avatar } from '@material-ui/core'
import { DonutLarge, Chat, MoreVert } from '@material-ui/icons'

const Header = () => {
    return (
        <div className={classes.SidebarHeader}>
            <Avatar />
            <div className={classes.SidebarHeaderControls}>
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
    )
}

export default Header

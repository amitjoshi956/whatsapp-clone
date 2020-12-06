import * as classes from './ChatRoomFooter.module.css'
import { InsertEmoticon, Mic } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

const ChatRoomFooter = () => {
    const sendMessage = () => { }

    return (
        <div className={classes.ChatRoomFooter}>
            <IconButton>
                <InsertEmoticon />
            </IconButton>
            <form>
                <input placeholder="Type a message" type="text" />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <IconButton>
                <Mic />
            </IconButton>
        </div>
    )
}

export default ChatRoomFooter

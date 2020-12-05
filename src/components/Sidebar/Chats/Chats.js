import * as classes from './Chats.module.css'
import Chat from './Chat/Chat'

const Chats = () => {
    return (
        <div className={classes.Chats}>
            <Chat />
            <Chat />
            <Chat />
        </div>
    )
}

export default Chats

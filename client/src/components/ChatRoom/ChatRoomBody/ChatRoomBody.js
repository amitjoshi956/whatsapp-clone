import * as classes from './ChatRoomBody.module.css'

const ChatRoomBody = () => {
    return (
        <div className={classes.ChatRoomBody}>
            <p className={classes.ChatMessage}>
                <span className={classes.ChatName}>Jethalal</span>
                    This is a message
                    <span className={classes.ChatTimestamp}>
                    {new Date().toString()}
                </span>
            </p>
            <p className={[classes.ChatMessage, classes.ChatReciever].join(' ')}>
                <span className={classes.ChatName}>Jethalal</span>
                    This is a message
                    <span className={classes.ChatTimestamp}>
                    {new Date().toString()}
                </span>
            </p>
            <p className={classes.ChatMessage}>
                <span className={classes.ChatName}>Jethalal</span>
                    This is a message
                    <span className={classes.ChatTimestamp}>
                    {new Date().toString()}
                </span>
            </p>
        </div>
    )
}

export default ChatRoomBody

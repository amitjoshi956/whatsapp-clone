import * as classes from './Sidebar.module.css'
import Chats from './Chats/Chats'
import Header from './Header/Header'
import Search from './Search/Search'

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <Header />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar
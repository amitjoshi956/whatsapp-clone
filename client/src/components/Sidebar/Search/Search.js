import * as classes from './Search.module.css'
import { SearchOutlined } from '@material-ui/icons'

const Search = () => {
    return (
        <div className={classes.SidebarSearch}>
            <div className={classes.SidebarSearchContainer}>
                <SearchOutlined />
                <input placeholder='Search or start new chat' type="text" />
            </div>
        </div>
    )
}

export default Search
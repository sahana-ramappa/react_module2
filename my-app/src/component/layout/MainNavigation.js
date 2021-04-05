import {useContext} from 'react';
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FavouritesContext from '../../store/Favourites-contxt';

function MainNavigation(){
    const favouriteCtx = useContext(FavouritesContext);

    return ( <header className='classes.header'>
        <div>
            React_js
        </div>
        <nav>
            <ul>
                <li><Link to='/'>All apps</Link></li>
                <li><Link to='/new-meetup'>Add New app</Link></li>
                <li><Link to='/Favourites'>
                    My Fav_app
                    <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                    </Link></li>
            </ul>
        </nav>
    </header>
    );
}
export default MainNavigation;
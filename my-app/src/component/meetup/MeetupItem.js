import {useContext} from 'react';
import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import FavouritesContext from '../../store/Favourites-contxt';

function MeetupItem(props){
    const favouriteCtx = useContext(FavouritesContext);
    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

    function toggleFavouritesStatusHandler(){
        if(itemIsFavourite){
            favouriteCtx.removeFavourite(props.id);
        }else{
            favouriteCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                address:props.address,
                image:props.image,
            });
        }
    }

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouritesStatusHandler}>{itemIsFavourite ? 'Remove From Favourite' : 'To Favourites'}</button>
        </div>
        </Card>
    </li>

}
export default MeetupItem;
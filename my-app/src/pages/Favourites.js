import {useContext} from 'react';

import FavouritesContext from '../store/Favourites-contxt';
import MeetupList from '../component/meetup/MeetupList';

function FavouritePage(){
    const favouriteCtx = useContext(FavouritesContext);
    let content;

    if(favouriteCtx.totalFavourites === 0){
        content = <p>You got no Favourites yet. Start Adding Some?</p>
    }else{
        content = <MeetupList meetups={favouriteCtx.favourites} />
    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
}
export default FavouritePage;
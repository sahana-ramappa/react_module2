import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../component/meetup/NewMeetupForm"

function NewMeetupsPage(){
    const history = useHistory();
    function addMeetupHander(meetupData){
        fetch(
            'https://react-getting-started-d3f8f-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
    <section>
         <h1>New Meetups Page</h1>
         <NewMeetupForm onAddMeetup={addMeetupHander}/>
    </section>
    );
}
export default NewMeetupsPage;
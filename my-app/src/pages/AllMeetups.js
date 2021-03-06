import {useState, useEffect } from 'react';
import MeetupList from '../component/meetup/MeetupList';

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-getting-started-d3f8f-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
       return response.json();
    }).then(data => {
      const meetups = [];
      for(const key in data){
        const meetup = {
            id:key,
            ...data[key]
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

   if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return (
        <section>
         <h1>All Meetups Page</h1>
         <MeetupList meetups={LoadedMeetups} />
        </section>
        );
}
export default AllMeetupsPage;
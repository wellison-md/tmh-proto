import { useEffect, useState } from 'react';
import { getFake } from '../../utils/fkdb/getFkData';
import { checkInitialStorage } from '../../utils/localStorage';
import { users } from '../../utils/fkdb/fkUsers';
import CardList from '../../components/cardList';
import DonateWidget from '../../components/donateWidget';
import EventList from '../../components/eventList';
import Footer from '../../components/footer';
import Header from '../../components/header';

checkInitialStorage('tmh-users', users);

export default function Home() {
  const [pets, setPets] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const petList = await getFake('pets');
      const eventList = await getFake('events');

      setPets(petList);
      setEvents(eventList);
    })()
  }, []);

  return (
    <>
      <Header />
      <CardList petList={ pets } />
      <DonateWidget />
      <EventList eventList={ events } />
      <Footer />
    </>
  );
}

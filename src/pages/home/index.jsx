import { useEffect, useState } from "react";
import { getFake } from "../../utils/fkdb/getFkData";
import NavBar from "../../components/navBar";
import CardList from "../../components/cardList";
import DonateWidget from "../../components/donateWidget";
import EventList from "../../components/eventList";
import Footer from "../../components/footer";
import { saveOnStorage } from "../../utils/localStorage";
import { users } from "../../utils/fkdb/fkUsers";

saveOnStorage('tmh-users', users);

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
      <h1>Home</h1>
      <NavBar />
      <CardList petList={ pets } />
      <DonateWidget />
      <EventList eventList={ events } />
      <Footer />
    </>
  );
}

import { useContext, useEffect, useState } from "react";
import { getFake } from "../../utils/fkdb/getFkData";
import { checkInitialStorage, checkLoggedUser } from "../../utils/localStorage";
import { users } from "../../utils/fkdb/fkUsers";
import CardList from "../../components/cardList";
import DonateWidget from "../../components/donateWidget";
import EventList from "../../components/eventList";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Store from "../../context/store";

checkInitialStorage('tmh-users', users);

export default function Home() {
  const [pets, setPets] = useState([]);
  const [events, setEvents] = useState([]);
  const { setLoggedUser } = useContext(Store);

  useEffect(() => {
    (async () => {
      const petList = await getFake('pets');
      const eventList = await getFake('events');

      setLoggedUser(checkLoggedUser());
      setPets(petList);
      setEvents(eventList);
    })()
  }, [setLoggedUser]);

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

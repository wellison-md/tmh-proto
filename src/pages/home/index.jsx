import { useEffect, useState } from "react";
import { getFake } from "../../utils/fkdb/getFkData";
import NavBar from "../../components/navBar";
import CardList from "../../components/cardList";
import DonateWidget from "../../components/donateWidget";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const petList = await getFake('pets');
      setData(petList)
    })()
  }, []);

  return (
    <>
      <h1>Home</h1>
      <NavBar />
      <CardList petList={ data } />
      <DonateWidget />
    </>
  );
}

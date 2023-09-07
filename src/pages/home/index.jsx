import { useEffect } from "react";
import { getFake } from "../../utils/fkdb/getFkData";
import NavBar from "../../components/navBar";

export default function Home() {
  useEffect(() => {
    (async () => {
      const x = await getFake('pets');
      console.log(x)
    })()
  }, []);

  return (
    <>
      <h1>Home</h1>
      <NavBar />
    </>
  );
}

import { useEffect } from "react";
import { getFake } from "../../utils/fkdb/getFkData";

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
    </>
  );
}

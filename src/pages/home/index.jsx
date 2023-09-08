import { useEffect, useState } from "react";
import { getFake } from "../../utils/fkdb/getFkData";
import NavBar from "../../components/navBar";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const x = await getFake('pets');
      console.log(x)
      setData(x)
    })()
  }, []);

  return (
    <>
      <h1>Home</h1>
      <NavBar />
      {
        data.length === 0
          ? 'loading...'
          : data.map((item) => (
            <ul key={ item.id }>{ item.nick }
              <img src={ item.image } alt={ item.nick } />
            </ul>))
      }
    </>
  );
}

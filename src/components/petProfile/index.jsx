import { useEffect, useState } from 'react';
import { getFake } from '../../utils/fkdb/getFkData';
import { useLocation } from 'react-router-dom';
import { PetTitle, Aside } from './petProfileStyle';
import Gallery from '../gallery';
import Footer from '../footer';
import DataPet from '../dataPet';
import { upPage } from '../../utils/dvs';

export default function PetProfile() {
  const [data, setData] = useState({});

  const { pathname } = useLocation()
  const id = pathname.split('/')[2];

  useEffect(() => {
    (async () => {
      upPage();
      const petList = await getFake('pets');
      const pet = petList.find((pett) => pett.id === Number(id));
      setData(pet);
    })()
  }, [id]);

  return (
    <>
      <Aside>
        <Gallery galleryList={ data?.galery || [] } />
        <div>
          <PetTitle>{ data.nick }</PetTitle>
          <h3>dados</h3>
          <DataPet data={ data } />
        </div>
      </Aside>
      <Footer />
    </>
  );
}

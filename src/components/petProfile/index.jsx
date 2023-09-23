import { useEffect, useState } from 'react';
import { getFake } from '../../utils/fkdb/getFkData';
import { useLocation } from 'react-router-dom';
import { formatAge, formatCategory, formatDateToView, formatGender } from '../../utils/formaters';
import { PetTitle } from './petProfileStyle';
import Gallery from '../gallery';
import Footer from '../footer';

export default function PetProfile() {
  const [data, setData] = useState({});

  const { pathname } = useLocation()
  const id = pathname.split('/')[2];

  useEffect(() => {
    (async () => {
      const petList = await getFake('pets');
      const pet = petList.find((pett) => pett.id === Number(id));
      setData(pet);
    })()
  }, [id]);

  return (
    <>
      <PetTitle>{ data.nick }</PetTitle>
      <Gallery galleryList={ data?.galery || [] } />
      <h3>dados</h3>
      <ul>
        <li>Resgatado em: { formatDateToView(data.rescue_date) }</li>
        <li>Categoria: { formatCategory(data.category) }</li>
        <li>Idade: { formatAge(data.age) }</li>
        <li>Gênero: {  formatGender(data.gender) }</li>
      </ul>

      <h3>Vacinas e medicações</h3>
      <ul>
        {
          data.vaccins?.length === 0
            ? 'Sem informações adicionais'
            : data.vaccins?.map((vac, i) => (<li key={ i }>{ vac }</li>))
        }
      </ul>
      <Footer />
    </>
  );
}

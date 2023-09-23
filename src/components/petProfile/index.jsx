import { useEffect, useState } from 'react';
import { getFake } from '../../utils/fkdb/getFkData';
import { useLocation } from 'react-router-dom';
import { formatAge, formatCategory, formatDateToView, formatGender } from '../../utils/formaters';

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
      <h2>{ data.nick }</h2>
      <img src={ data.image } alt={ data.nick } />
      {
        data.galery?.map((img, i) => (
          <div key={ i }>
            <img src={ img } alt={ `foto ${ i } de ${ data.nick } ` } />
          </div>
        ))
      }
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
    </>
  );
}

import PropTypes from 'prop-types';
import { MainImage, SectionImages, SubImage, Wrapper } from './galleryStyle';
import { useEffect, useState } from 'react';
import Spinner from '../spinner';

export default function Gallery(props) {
  const { galleryList } = props;
  const [current, setCurrent] = useState('');

  useEffect(() => {
    setCurrent(galleryList[0]);
  }, [galleryList]);

  return (
    <Wrapper>
      <MainImage src={ current } alt='Imagem corrente' />
      <SectionImages>
        {
          galleryList.length === 0
            ? <Spinner msg='Carregando...' />
            : galleryList?.map((item, idx) => (
              <SubImage
                key={ idx }
                src={ item }
                alt='imagem da galeria'
                onClick={ () => setCurrent(galleryList[idx]) }
              />))
        }
      </SectionImages>
    </Wrapper>
  );
}

Gallery.propTypes = {
  galleryList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

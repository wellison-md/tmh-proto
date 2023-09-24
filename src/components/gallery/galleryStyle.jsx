import { styled } from 'styled-components';

export const MainImage = styled.img`
  max-width: 85%;
  width: ${ ({ theme }) => parseInt(theme.sizes.xxl) * 10}px;
  height: ${ ({ theme }) => parseInt(theme.sizes.l) * 10}px;
  object-fit: cover;

  @media(max-width: ${ ({ theme }) => theme.screens.xs }) {
    max-width: 100%;
  }
`;

export const SectionImages = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const SubImage = styled.img`
  border-radius: ${ ({ theme }) => theme.sizes.xxs };
  cursor: pointer;
  filter: grayscale(1);
  height: ${ ({ theme }) => theme.sizes.l };
  margin: 0 ${ ({ theme }) => theme.sizes.xxxs };
  max-width: ${ ({ theme }) => theme.sizes.l };
  object-fit: cover;
  transition: 0.3s;
  width: ${ ({ theme }) => theme.sizes.l };

  &:hover {
    filter: grayscale(0);
    transform: scale(1.05);
  }
`;

export const Wrapper = styled.div`
  max-width: ${ ({ theme }) => parseInt(theme.sizes.xxl) * 10}px;
`;

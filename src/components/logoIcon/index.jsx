import icon from '../../assets/logo/logo-inverse.png';
import { IconTmh, Wrapper } from './logoIconStyle';
import lettering from '../../assets/logo/tmh-lettering.svg';

export default function LogoIcon() {
  return (
    <Wrapper>
      <IconTmh src={ icon } alt='take me home icon' />
      <img src={ lettering } alt='take me home lettering' />
    </Wrapper>
  );
}

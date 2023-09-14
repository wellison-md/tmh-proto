import { Bg, FooterHeadline, FooterIcon, FooterLabel } from "./footerStyle";
import icon from '../../assets/logo/logo-inverse.png';

export default function Footer() {
  return (
    <Bg>
      <FooterHeadline>
        <FooterIcon src={ icon } alt='take-me-home ícone' />
        <FooterLabel>Take me home - &copy; copyright 2023</FooterLabel>
      </FooterHeadline>

      <p>Termos de uso</p>
      <p>Política de privacidade</p>
    </Bg>
  );
}

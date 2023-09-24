import Footer from '../../components/footer';
import Header from '../../components/header';
import { Error404 } from './notFoundStyle';
import { BsEmojiFrown } from 'react-icons/bs';

export default function NotFound() {
  return (
    <>
      <Header />
      <Error404>
        <BsEmojiFrown />
        <h1>404</h1>
        <p>Ops, parece que esta página não está disponível :/</p>
      </Error404>
      <Footer />
    </>
  );
}

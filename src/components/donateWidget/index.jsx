import { useEffect, useState } from 'react';
import { Balance, Comand, ComandBtn, DonateBtn,
  DonateContainer, DonateLabel, Wrapper } from './donateStyle';
import { saveOnStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';

export default function DonateWidget() {
  const [donation, setDonation] = useState(0);
  const navigate = useNavigate();

  const decreaseValue = () => {
    setDonation(donation - 5);
  };

  const increaseValue = () => {
    setDonation(donation + 5);
  };

  const savePrevDonation = () => {
    saveOnStorage('tmh-prev-donation', donation);
    return navigate('/donate');
  }

  useEffect(() => {
    if (donation <= 0) {
      setDonation(0);
    }
  }, [donation]);

  return (
    <Wrapper>
      <DonateContainer>
        <DonateLabel>Ajude-nos com uma doação</DonateLabel>
        <Comand>
          <ComandBtn
            onClick={ () => decreaseValue() }
            disabled={ donation === 0}
          >
            <BsArrowDownCircle />
          </ComandBtn>

          <Balance>R$ { donation?.toFixed(2) }</Balance>
          <ComandBtn onClick={ () => increaseValue() }>
            <BsArrowUpCircle />
          </ComandBtn>
        </Comand>

        <Comand>
          <DonateBtn
            onClick={ () => savePrevDonation() }
            disabled={ donation === 0}
          >
            Doar
          </DonateBtn>
        </Comand>
      </DonateContainer>
    </Wrapper>
  );
}

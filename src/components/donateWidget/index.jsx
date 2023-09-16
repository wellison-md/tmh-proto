import { Balance, Comand, ComandBtn, DonateBtn, DonateLabel, Wrapper } from "./donateStyle";

export default function DonateWidget() {
  return (
    <Wrapper>
      <DonateLabel>Ajude-nos com uma doação</DonateLabel>
      <Comand>
        <ComandBtn>-</ComandBtn>
        <Balance>{ '0.00' }</Balance>
        <ComandBtn>+</ComandBtn>
      </Comand>
      <DonateBtn>Doar</DonateBtn>
    </Wrapper>
  );
}

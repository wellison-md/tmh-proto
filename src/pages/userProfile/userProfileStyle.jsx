import { styled } from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  height: 100px;
  margin: 24px 0;
  max-width: 150px;
  max-height: 150px;
  outline: 8px solid grey;
  width: 100px;
`;

export const UserLabel = styled.h2`
  color: #8500d3;
`;

export const UserCoins = styled.p`
  font-weight: 700;
  padding-bottom: 36px;
`;

export const LogoutBtn = styled.button`
  margin-bottom: 36px;
  max-width: 150px;
  padding: 8px;
  width: 100px;
`;

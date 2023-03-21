import styled from 'styled-components';

export const Container = styled.header`
display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #33333d;
  color:white;
  padding: 0px 40px;
  @media (max-width: 420px) {
    padding: 6px 40px;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h4 {
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  
`;
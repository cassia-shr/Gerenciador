import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  form{
    margin-top: 30px;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const ButtonSave = styled.button`
  padding: 5px;
  margin: 4px;
  border: none;
  border-radius: 5px;
  background-color: #24d1a2;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  padding: 5px;
  margin: 4px;
  border: none;
  border-radius: 5px;
  background-color: #6e6767;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const ButtonDelete = styled.button`
  padding: 5px;
  margin: 4px;
  border: none;
  border-radius: 5px;
  background-color: #d95252;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const Group = styled.div``

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const ButtonField = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
`
export const Input = styled.input`
`

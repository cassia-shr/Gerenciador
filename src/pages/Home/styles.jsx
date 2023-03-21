import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 80px;
  @media (max-width: 502px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
    margin-left: 40px;
    padding: 7px;
    border: none;
    border-radius: 5px;
    background-color: #24d1a2;
    font-weight: bold;
    color: white;
    cursor: pointer;
`;

export const FilterGroup = styled.div`
  width: 80%;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const FilterField = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilterLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
`
export const FilterInput = styled.input`
`

export const FilterButton = styled.button`
  padding: 7px;
  border: none;
  border-radius: 5px;
  background-color: #24d1a2;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const ListSection = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
    border: 1px solid;
    border-collapse: collapse;
    padding: 10px;
    font-size: 14px;
    text-align: center ;
    thead>tr>th{
        border: 1px solid white;
        padding: 5px;
    }
    tbody>tr>td {
        border: 1px solid white;
        padding: 6px 12px;
        a{
            padding: 2px 4px;
            font-size: 12px;
            border: none;
            border-radius: 5px;
            background-color: #24d1a2;
            font-weight: bold;
            color: white;
            cursor: pointer;
            text-decoration: inherit;
        }
    }
`;

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, AddSection, Button, ListSection, Table, FilterGroup, FilterField, FilterLabel, FilterInput, FilterButton } from './styles';
import Header from '../../components/Header/Header';
import api from '../../api';


export default function Home() {
  const [dispositivos, setDispositivos] = useState([])
  const [ipFilter, setIpFilter] = useState('')
  const [soFilter, setSoFilter] = useState('')
  const [tipoFilter, setTipoFilter] = useState('')

  useEffect(() => {
    async function getDispositivos() {
      const { data } = await api.get('dispositivos');
      setDispositivos(data);
    }
    getDispositivos();
  }, []);

  async function filtrarDispositivos() {
    const ip = ipFilter && ipFilter !== "" ? '&ip='.concat(ipFilter) : '';
    const so = soFilter && soFilter !== "" ? '&so='.concat(soFilter) : '';
    const tipo = tipoFilter && tipoFilter !== "" ? '&tipo='.concat(tipoFilter) : '';
    const filtroUrl = `dispositivos?${ip}${so}${tipo}`

    const { data } = await api.get(filtroUrl);
    setDispositivos(data);
  }

  const navigate = useNavigate();

  const handleAddButton = () => {
    navigate('/dispositivo')
  }

  return (
    <>
      <Header />
      <Container>
        <AddSection>
          <Button onClick={handleAddButton}>Adicionar Dispositivo</Button>
        </AddSection>
        <FilterGroup>
          <span>Filtros: </span>
          <FilterField>
            <FilterLabel>IP</FilterLabel>
            <FilterInput value={ipFilter} onChange={e => setIpFilter(e.target.value)} />
          </FilterField>
          <FilterField>
            <FilterLabel>Sistema Operacional</FilterLabel>
            <FilterInput value={soFilter} onChange={e => setSoFilter(e.target.value)} />
          </FilterField>
          <FilterField>
            <FilterLabel>Tipo</FilterLabel>
            <FilterInput value={tipoFilter} onChange={e => setTipoFilter(e.target.value)} />
          </FilterField>
          <FilterButton onClick={() => filtrarDispositivos()}>Filtrar</FilterButton>
        </FilterGroup>
        <ListSection>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>IP</th>
                <th>Usuário</th>
                <th>Processador</th>
                <th>RAM</th>
                <th>Sistema Operacional</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {dispositivos?.map((dispositivo) => (
                <tr key={dispositivo.id}>
                  <td>{dispositivo.nome}</td>
                  <td>{dispositivo.tipo}</td>
                  <td>{dispositivo.ip}</td>
                  <td>{dispositivo.usuario}</td>
                  <td>{dispositivo.processador}</td>
                  <td>{dispositivo.ram}</td>
                  <td>{dispositivo.so}</td>
                  <td>
                    <Link to={`/dispositivo/${dispositivo.id}`}>Editar</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ListSection>
      </Container>
    </>
  );
}
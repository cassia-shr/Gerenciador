import { useState, useEffect } from 'react';
import { Container, Input, Field, ButtonField, Group, Label, ButtonSave, ButtonCancel, ButtonDelete } from './styles';
import Header from '../../components/Header/Header';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api';


export default function Dispostivo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [ip, setIp] = useState('');
  const [usuario, setUsuario] = useState('');
  const [processador, setProcessador] = useState('');
  const [ram, setRam] = useState('');
  const [so, setSo] = useState('');

  useEffect(() => {
    if (id) {
      async function getDispositivo() {
        const { data } = await api.get(`dispositivos/${id}`);
        setNome(data.nome);
        setTipo(data.tipo);
        setIp(data.ip);
        setUsuario(data.usuario);
        setProcessador(data.processador);
        setRam(data.ram);
        setSo(data.so);
      }
      getDispositivo();
    }
  }, [id]);

  const handleCancel = () => {
    navigate('/');
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (id) {
      await api.delete(`/dispositivos/${id}`).then(navigate('/'));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await api.put(`/dispositivos/${id}`, { nome, tipo, ip, usuario, processador, ram, so, id }).then(navigate('/'));
    } else {
      await api.post('/dispositivos', { nome, tipo, ip, usuario, processador, ram, so }).then(navigate('/'));
    }
  }

  return (
    <>
      <Header />
      <Container>
        <span>
          {id ? 'Editar Dispositivo' : 'Adicionar Dispositivo'}
        </span>
        <form>
          <Group>
            <Field>
              <Label>Nome do Dispositivo</Label>
              <Input value={nome} onChange={e => setNome(e.target.value)} name='nome' />
            </Field>
            <Field>
              <Label>Tipo</Label>
              <Input value={tipo} onChange={e => setTipo(e.target.value)} name='tipo' />
            </Field>
            <Field>
              <Label>IP</Label>
              <Input value={ip} onChange={e => setIp(e.target.value)} name='ip' />
            </Field>
            <Field>
              <Label>Usuário</Label>
              <Input value={usuario} onChange={e => setUsuario(e.target.value)} name='usuario' />
            </Field>
          </Group>
          <Group>
            <Field>
              <Label>Processador</Label>
              <Input value={processador} onChange={e => setProcessador(e.target.value)} name='processador' />
            </Field>
            <Field>
              <Label>RAM</Label>
              <Input value={ram} onChange={e => setRam(e.target.value)} name='ram' />
            </Field>
            <Field>
              <Label>SO</Label>
              <Input value={so} onChange={e => setSo(e.target.value)} name='so' />
            </Field>
            <ButtonField>
              <ButtonSave onClick={handleSubmit}>Salvar</ButtonSave>
              <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>
              {id ? (<ButtonDelete onClick={handleDelete}>Excluir</ButtonDelete>) : ''}
            </ButtonField>
          </Group>
        </form>

      </Container>
    </>
  );
}
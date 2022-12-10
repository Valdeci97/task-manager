import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppCtx } from '../context/Provider';
import { SHARED } from '../styles/shared';

export default function Footer() {
  const { theme } = useContext(AppCtx);
  const navigate = useNavigate();

  function redirect(): void {
    navigate('/create-task');
  }

  return (
    <>
      <SHARED.Footer>
        <SHARED.Button type="button" onClick={redirect} theme={theme}>
          Criar Tarefa
        </SHARED.Button>
      </SHARED.Footer>
    </>
  );
}

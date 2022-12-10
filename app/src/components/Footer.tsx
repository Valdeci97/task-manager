import { useContext } from 'react';
import { AppCtx } from '../context/Provider';
import { SHARED } from '../styles/shared';

export default function Footer() {
  const { theme, navigate } = useContext(AppCtx);

  return (
    <>
      <SHARED.Footer>
        <SHARED.Button
          type="button"
          onClick={() => navigate('/create-task')}
          theme={theme}
        >
          Criar Tarefa
        </SHARED.Button>
      </SHARED.Footer>
    </>
  );
}

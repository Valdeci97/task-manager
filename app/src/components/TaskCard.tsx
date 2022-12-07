import { AppCtx } from '../context/Provider';
import { TaskProps } from '../interfaces/Tasks';
import { STSK } from '../styles/tasks';
import { SHARED } from '../styles/shared';
import { useContext } from 'react';

export default function TaskCard(props: TaskProps) {
  const { theme } = useContext(AppCtx);

  return (
    <STSK.CardContainer>
      <h1>{props.title}</h1>
      <span>{props.category}</span>
      <span>{props.description}</span>
      <SHARED.Button type="button" theme={theme}>
        Editar
      </SHARED.Button>
    </STSK.CardContainer>
  );
}

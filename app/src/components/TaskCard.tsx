import { TaskProps } from '../interfaces/Tasks';
import { STSK } from '../styles/tasks';

export default function TaskCard(props: TaskProps) {
  return (
    <STSK.CardContainer>
      <h1>{props.title}</h1>
      <span>{props.category}</span>
      <span>{props.description}</span>
    </STSK.CardContainer>
  );
}

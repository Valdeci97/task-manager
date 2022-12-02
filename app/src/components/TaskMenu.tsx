import { useContext } from 'react';
import { AppCtx } from '../context/Provider';
import { TaskMenuProps } from '../interfaces/TaskMenu';
import { STM } from '../styles/taskMenu';

export default function TaskMenu({
  handleClick,
  isActive,
  text,
}: TaskMenuProps) {
  const { theme } = useContext(AppCtx);

  return (
    <STM.Filter
      type="button"
      onClick={({ currentTarget }) => handleClick(currentTarget.value)}
      value={text}
      isActive={isActive}
      theme={theme}
    >
      {text}
    </STM.Filter>
  );
}

import { useContext, useState } from 'react';
import { AppCtx } from '../context/Provider';
import { STM } from '../styles/taskMenu';

const filterOptions = ['Todas', 'Hoje', 'Semana', 'Mês', 'Ano', 'Atrasadas'];

export default function TaskMenu() {
  const [isActive, setIsActive] = useState<string>('Todas');
  const { theme } = useContext(AppCtx);

  return (
    <STM.Container>
      {filterOptions.map((filter, index) => (
        <STM.Filter
          key={`x-${index}`}
          type="button"
          onClick={({ currentTarget }) => setIsActive(currentTarget.value)}
          value={filter}
          isActive={isActive === filter}
          theme={theme}
        >
          {filter}
        </STM.Filter>
      ))}
    </STM.Container>
  );
}

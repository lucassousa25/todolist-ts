import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar ReactJS p/ 30 minutos', done: false },
    { id: 2, name: 'Estudar TypeScript p/ 15 minutos', done: false }
  ]);

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>
      </S.Area>
    </S.Container>
  )
}


export default App;
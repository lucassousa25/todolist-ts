import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar ReactJS p/ 30 minutos', done: false },
    { id: 2, name: 'Estudar TypeScript p/ 15 minutos', done: true }
  ]);

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </S.Area>
    </S.Container>
  )
}


export default App;
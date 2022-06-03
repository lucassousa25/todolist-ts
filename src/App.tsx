import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar ReactJS p/ 30 minutos', done: false },
    { id: 2, name: 'Estudar TypeScript p/ 15 minutos', done: true }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (const i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }

    setList(newList);
  }

  const handleDeleteTask = (deleteTaskById: number): void => {
    setList(list.filter((task) => task.id !== deleteTaskById));
  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas 📝</S.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem 
            key={index}
            item={item}
            onChange={handleTaskChange}
            deleteTask={handleDeleteTask} 
          />
        ))}
      </S.Area>
    </S.Container>
  )
}


export default App;
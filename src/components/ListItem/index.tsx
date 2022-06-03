import * as S from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
  deleteTask: (deleteTaskById: number) => void
};

export const ListItem = ({ item, onChange, deleteTask }: Props) => {
  // const [isChecked, setIsChecked] = useState(item.done);

  return (
    <S.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
      <span className='delete' onClick={() => deleteTask(item.id)}>✖</span>
    </S.Container>
  )
}

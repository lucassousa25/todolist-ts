import * as S from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item
};

export const ListItem = ({ item }: Props) => {
  

  return (
    <S.Container>
      <input type="checkbox" />
      <label>{item.name}</label>
    </S.Container>
  )
}

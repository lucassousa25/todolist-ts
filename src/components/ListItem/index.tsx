import * as S from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item
};

export const ListItem = ({ item }: Props) => {
  

  return (
    <S.Container>
      {item.name}
    </S.Container>
  )
}

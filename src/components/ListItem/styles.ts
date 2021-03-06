import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
  `
  display: flex;
  flex-direction: row;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    color: #ccc;
    text-decoration: ${ done ? 'line-through' : 'initial' }
  }

  .delete {
    margin-left: auto;
    cursor: pointer;
    transition: transform 0.4s;
    transform: translateX(0) scale(0.8);
  }

  .delete:hover {
    color: red;
    transform: translateX(0) scale(1.4);
  }
`
));
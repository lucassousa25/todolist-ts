import styled from 'styled-components';

export const Container = styled.div`
  background-color: #17181f;
  color: #797A81;
  min-height: 100vh;
  display: flex;
`;

export const Area = styled.div`
  margin: auto;
  background-color: #eee;
  max-width: 720px;
  min-width: 320px;
  width: 520px;
  height: 80vh;
  max-height: 80vh;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #111;
  overflow: scroll;
  overflow-x: hidden; 

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #eee;
    border-radius: 0 10px 10px 0;
  }
  ::-webkit-scrollbar-button {
    border: 1px #eee none;
  }
  ::-webkit-scrollbar-track {
    background: #eee;
  }
  ::-webkit-scrollbar-track-piece {
    background: #eee;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-corner {
    border-radius: 5px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #17181f;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`;
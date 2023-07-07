import styled from "styled-components";

const Component = styled.div`
  height: 100px;
  width: 100px;
  background: red;
`;

export default function App(props) {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

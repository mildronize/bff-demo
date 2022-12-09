import styled from '@emotion/styled';

const StyledApp = styled.div`
  // Your style here
`;

export function App({ title }: { title: string }) {
  return (
    <StyledApp>
      <h2>Hello {title}</h2>
    </StyledApp>
  );
}

export default App;

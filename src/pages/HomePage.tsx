import styled from "styled-components";

const HomePage = () => {
  return <Container />;
};

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export default HomePage;

import { typography } from "@/styles/typography";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <h1>Sh4re Web v2</h1>
      <p>정보 수업을 위한 똑똑한 과제 관리 플랫폼</p>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.primary.blue};
    ${typography.heading1}
  }
`;

export default HomePage;

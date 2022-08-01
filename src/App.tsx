import styled from 'styled-components';
import styles from './App.module.css';

const Header = styled.h1`
  text-align: center;
  font-size: 5rem;

  @media (max-width: 500px) {
    font-size: 75px;
  }
`;

const Footer = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white;
`;

const StyledLink = styled.a`
  color: white;
  font-style: italic;
  font-weight: 500;
  margin-left: 4px;
  text-decoration: underline;
  text-transform: lowercase;

  &:hover {
    font-weight: 600;
  }
`;

function App(): JSX.Element {
  return (
    <div className={styles.container} data-testid="app-container">
      <Header>{'< add dope shit here >'}</Header>
      <Footer>
        Made by
        <StyledLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://ponti.io"
        >
          @thecharlesponti
        </StyledLink>
      </Footer>
    </div>
  );
}

export default App;

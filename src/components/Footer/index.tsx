import { Container } from "./styles";
import { GithubLogo } from "phosphor-react";
export function Footer() {
  return (
    <Container>
      <p>
        Built with love by{" "}
        <a href="https://github.com/binaryleo">
          <GithubLogo 
         size={26}
           color="#28A277" 
           alt="github"
           weight="light"
            />
        </a>
      </p>
    </Container>
  );
}

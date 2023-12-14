import { Button } from "../../components/button/index";
import { useAuth } from "../../context/AuthContext";
import { message } from "../../messages/index";
import {
  Container,
  ContainerContent,
  ContainerText,
  ImageAvatar,
  Tilte,
} from "./styles";

export const Dashboard = () => {
  const { data, signOut } = useAuth();
  return (
    <Container>
      <ContainerContent>
        <ImageAvatar src={data.image} alt="avatar" />

        <ContainerText>
          <Tilte>
            {message("messages.name")}: {data.firstName}
          </Tilte>
          <Tilte>
            {message("messages.lastName")}: {data.lastName}
          </Tilte>
          <Tilte>
            {message("messages.gender")}: {data.gender}
          </Tilte>
        </ContainerText>
        <Button onClick={() => signOut()} variant="primary" type="button">
          {message("messages.signOut")}
        </Button>
      </ContainerContent>
    </Container>
  );
};

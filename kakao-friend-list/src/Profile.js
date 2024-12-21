import { View, Image, Text } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;
const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  borderradius: ${(props) => props.size * 0.4}px;
`;
const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;
const NameText = styled.Text`
  font-weight: ${(props) => (props.isMine ? "bold" : "normal")};
  font-size: ${(props) => (props.isMine ? 16 : 15)}px;
`;
const IntroductionText = styled.Text`
  font-size: ${(props) => (props.isMine ? 12 : 11)}px;
  color: grey;
`;

export default ({ uri, name, introduction, isMine }) => {
  const size = isMine ? 50 : 40;
  return (
    // <View style={{ flexDirection: "row" }}>
    <Container>
      <ProfileImage source={{ uri }} size={size} />
      <TextContainer>
        <NameText isMine={isMine}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMine ? 6 : 2} />
            <IntroductionText isMine={isMine}>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};

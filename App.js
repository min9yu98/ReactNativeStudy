import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = (props) => {
  return <Text>{props.title}</Text>;
};

const MyProfile = () => {
  return (
    <Profile
      name="민규"
      uri="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZhYCuEkzmA0V4faXsxhUKoiVhJDaVVIiVeNF8N-ZNnie3PkXVZ646xQqobKBAniuL9EvkvwT9QMwG1cD8V78MUw"
      profileSize={40}
    />
  );
};

const Division = () => {
  return <Text>Division</Text>;
};

const FriendSection = () => {
  return <Text>FriendSection</Text>;
};

const FriendList = () => {
  return (
    <View>
      <Profile
        name="지은"
        uri="https://www.fitpetmall.com/wp-content/uploads/2022/11/shutterstock_196467692-1024x819.jpg"
        profileSize={30}
      />
      <Profile
        name="지연"
        uri="https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg"
        profileSize={30}
      />
      <Profile
        name="세인"
        uri="https://image.dongascience.com/Photo/2022/06/6982fdc1054c503af88bdefeeb7c8fa8.jpg"
        profileSize={30}
      />
      <Profile
        name="지훈"
        uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dGQJiJNm2GxDutZ4xL5brDpPNGJBfoxq099AiAL3N1QE0ZZTKchxP95REshjoU2IXgc&usqp=CAU"
        profileSize={30}
      />
      <Profile
        name="영훈"
        uri="https://i.pinimg.com/236x/1b/3e/79/1b3e79e3ca6098007722d01409c3f1fd.jpg"
        profileSize={30}
      />
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: props.uri,
        }}
        style={{
          width: props.profileSize,
          height: props.profileSize,
        }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

// class Profile extends React.Component {
//   render() {
//     return (
//       <View style={{ flexDirection: "row" }}>
//         <Image
//           source={{
//             uri: this.props.uri,
//           }}
//           style={{
//             width: this.props.profileSize,
//             height: this.props.profileSize,
//           }}
//         />
//         <Text>{this.props.name}</Text>
//       </View>
//     );
//   }
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

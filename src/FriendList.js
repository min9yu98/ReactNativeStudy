import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
  const sortedData = [...props.data].sort(
    (a, b) => a.name.localeCompare(b.name) // 알파벳 순서로 정렬
  );
  // 3항연산자
  /*
  return props.isOpened ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: bottomSpace }}
    >
      {sortedData.map((item, index) => (
        <View key={index}>
          <Profile
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
        />
        <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  ) : null;
   */

  // if 문 사용
  /*
  if (!props.isOpened) return null;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: bottomSpace }}
    >
      {sortedData.map((item, index) => (
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
  */

  // && 이용
  return (
    props.isOpened && (
      <ScrollView showsVerticalScrollIndicator={false}>
        {sortedData.map((item, index) => (
          <View key={index}>
            <Profile
              uri={item.uri}
              name={item.name}
              introduction={item.introduction}
            />
            <Margin height={13} />
          </View>
        ))}
      </ScrollView>
    )
  );
};

import { Stack, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{
        uri: "https://velog.velcdn.com/images/im-p0ssible/profile/9ad65fed-d2c8-406f-ab47-ecec62718acc/image.jpeg",
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default function StackScreen() {
  const [count, setCount] = useState(0);

  const navigation = useNavigation();

  // 내비게이션이 바뀔때마다 헤더 바꿔주는 법
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  navigation.setOptions;
  return (
    <>
      {/* index와 _layout을 연결하는 방법 */}
      <Stack.Screen
        options={{
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update Count" />,
        }}
      />
      <Text>Count: {count}</Text>
    </>
  );
}

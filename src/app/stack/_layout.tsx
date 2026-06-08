import { Stack } from "expo-router";

export default function StackScreenLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}

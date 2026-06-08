import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <AnimatedSplashOverlay />
      <AppTabs /> */}
      <Stack
        screenOptions={
          {
            // headerStyle: {
            //   backgroundColor: "#f4511e",
            // },
          }
        }
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="explore" />
        <Stack.Screen name="home" />
        <Stack.Screen name="stack" />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}

import { Link, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

function Header() {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/home/about">About</Link>
    </>
  );
}

export default function HomeScreenLayout() {
  return (
    <SafeAreaView>
      <Header />
      <Slot />
    </SafeAreaView>
  );
}

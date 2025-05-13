import { Text as TextComponent, View } from "react-native";

export default function Text() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TextComponent style={{ fontWeight: "700" }}>Hello, world!</TextComponent>
    </View>
  );
}

import { View, Text } from "react-native";
import SvgComponent from "../assets/SVG";

export default function EmptyState() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SvgComponent />
      <Text style={{ color: "gray", marginTop: 20 }}>
        No photo uploaded yet
      </Text>
    </View>
  );
}

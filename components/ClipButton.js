import { TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function ClipButton({ onPress, enabled }) {
  const name = enabled ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={name} size={40} color="salmon" />
    </TouchableOpacity>
  );
}

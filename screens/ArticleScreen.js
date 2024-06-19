import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import ClipButton from "../components/ClipButton";
import { useDispatch, useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/userSlice";

export default function ArticleScreen({ route }) {
  const { item } = route.params;
  const dispatch = useDispatch();
  const clips = useSelector((state) => state.user.clips);

  const isClipped = () => {
    return clips.some((clip) => clip.url === item.url);
  };

  const pressClip = () => {
    if (isClipped()) {
      dispatch(deleteClip(item));
    } else {
      dispatch(addClip(item));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={pressClip} enabled={isClipped()} />
      <WebView source={{ uri: item.url }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

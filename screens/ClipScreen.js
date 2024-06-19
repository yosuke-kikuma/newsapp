import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";

export default function ClipScreen({ navigation }) {
  const clips = useSelector((state) => state.user.clips);
  console.log(clips);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            urlToImage={item.urlToImage}
            description={item.description}
            author={item.author}
            onPress={() => navigation.navigate("Article", { item: item })}
          />
        )}
        keyExtractor={(item) => item.url}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});

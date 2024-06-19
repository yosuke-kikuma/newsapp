import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function ListItem({ urlToImage, description, author, onPress }) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}> 
      <View style={styles.itemContainerLeft}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: urlToImage }}
        />
      </View>
      <View style={styles.itemContainerRight}>
        <Text numberOfLines={3} style={styles.itemText}>
          {description}
        </Text>
        <Text style={styles.itemAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 10,
  },
  itemContainerLeft: {
    width: 100,
  },
  itemContainerRight: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
    padding: "8px",
  },
  itemAuthor: {
    fontSize: 12,
    color: "gray",
    padding: "8px",
  },
});

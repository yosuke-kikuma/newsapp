import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import axios from "axios";
import { useState, useEffect } from "react";
import Constants from "expo-constants";

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.expoConfig.extra.newsApiKey}`
        );
        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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

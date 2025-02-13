import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";

import music_data from "./music-data.json";
import SongCard from "./components/SongCard/SongCard";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  const [list, setList] = useState(music_data);

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchText) > -1;
    })

    setList(filteredList)
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
        <FlatList
          data={list}
          renderItem={({ item }) => <SongCard song={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    width:'100%',
    height:1,
    backgroundColor:"gray"
  }
});

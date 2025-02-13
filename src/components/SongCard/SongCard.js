import { View, Text, Image, StyleSheet } from "react-native";

const SongCard = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_text}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default SongCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    marginRight: 10,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  content_container: {
    flexDirection:"row",
  },
  info_container: {
    flex:1,
    flexDirection: "row",
    alignItems:"center",
  },
  year: {
    fontWeight: "bold",
    color: "gray",
    marginLeft: 10,
    fontSize: 12,
  },
  soldout_container: {
    borderWidth:1,
    borderColor:"red",
    padding:5,
    borderRadius:5
  },
  soldout_text: {
    color:"red"
  }
});

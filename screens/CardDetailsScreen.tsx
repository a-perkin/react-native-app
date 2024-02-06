import { SafeAreaView, View } from "react-native";
import { styles } from "../constants/styles";
import Card from "../components/Card";
import Statement from "../components/Statement";

const CardDetailScreen = ({ route, navigation }) => {
  const card = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.CardViewContainer}>
        <View style={styles.cardContainer}>
          <Card item={card} navigation={navigation}></Card>
        </View>
        <Statement card={card} navigation={navigation}></Statement>
      </View>
    </SafeAreaView>
  );
};

export default CardDetailScreen;
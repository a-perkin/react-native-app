import { View, Text, SafeAreaView } from "react-native";
import CardListView from "../components/CardsList";
import { styles } from "../constants/styles";

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainScreenContainer}>
        <View style={styles.mainScreenCardList}>
          <CardListView navigation = {navigation}/>
        </View>
        <View style={styles.mainScreenStatisticContainer}>
          <View style={styles.mainScreenStatistic}>
            <Text style={styles.balance}>
              Some component will be here later ...
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

import { View, Text, SafeAreaView } from "react-native";
import CardListView from "../components/CardsList";
import { styles } from "../constants/styles";
import PromoBlock from "../components/PromoBlock";

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainScreenContainer}>
        <View style={styles.mainScreenCardList}>
          <CardListView navigation = {navigation}/>
        </View>
        <View style={styles.mainScreenStatisticContainer}>
          <PromoBlock navigation = {navigation}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

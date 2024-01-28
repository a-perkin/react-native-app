import { View, Text } from "react-native";
import { styles } from "../constants/styles";
import React from "react";
import Promo from "./Promo";

const PromoBlock = ({ navigation }) => {
  return (
    <View style={styles.mainScreenStatistic}>
      <Promo navigation = {navigation}/>

    </View>
  );
};

export default PromoBlock;
import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../constants/styles";

const StatementItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image style={styles.statementIcon} source={item.icon}></Image>
        <View style={styles.statemenDetails}>
          <Text style={styles.statementTitle}>{item.title}</Text>
          <Text style={styles.statementDescription}>{item.desc}</Text>
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={item.isReplenishment ? styles.amountTextReplenishment : styles.amountText}>{item.amount}</Text>
      </View>
    </View>
  );
};

export default StatementItem;

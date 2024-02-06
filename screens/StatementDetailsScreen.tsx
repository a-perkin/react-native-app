import { View, StyleSheet, Image, Text } from "react-native";
import { styles } from "../constants/styles";

const StatementDetailsScreen = ({ route, navigation }) => {
  const item = route.params.item;
  const card = route.params.card;
  console.log(card);

  return (
    <View style={styles.containerStatementDetail}>
      <View style={styles.statementInfoContainer}>
        <View style={styles.statementInfo}>
          <View style={styles.statementDetailsIconContainer}>
            <Image
              style={styles.statementDetailsIcon}
              source={item.icon}
            ></Image>
          </View>
          <View>
            <Text style={[styles.statementDetailsDate, styles.statementTitle]}>{item.date}</Text>
          </View>
          <View>
            <Text style={styles.statementDetailsDesc}>{item.desc}</Text>
          </View>
          <View>
            <Text style={styles.statementDetailsAmount}>{item.amount}</Text>
          </View>
          <View>
            {item.isReplenishment ? (
              <Text style={styles.statementDetailsTitle}>{item.title} → {card.type}</Text>
            ) : (
              <Text style={styles.statementDetailsTitle}>{card.type} → {item.title}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.statementNav}></View>
    </View>
  );
};

export default StatementDetailsScreen;

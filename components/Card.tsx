import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../constants/styles";
import { CARD_STYLE } from "../constants/cardStyles";
import { IMAGES } from "../constants/images";

const Card = ({ item, navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={[
          CARD_STYLE[item.type].mainColor,
          CARD_STYLE[item.type].secondaryColor,
        ]}
        start={{ x: 0.3, y: -0.9 }} // start gradient left
        end={{ x: 1.5, y: 0.5 }} // end gradient right
        style={styles.cardBackground}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Card", item)}
        >
          <View style={styles.card}>
            <View style={[styles.balance]}>
              <Text
                style={[
                  styles.strokedText,
                  styles.textColor,
                  styles.balanceText,
                ]}
              >
                {item.balance}
              </Text>
            </View>
            <View style={styles.requisites}>
              <Text style={[styles.pan, styles.strokedText]}>{item.pan}</Text>
              <View style={styles.expDate}>
                <Text style={styles.expDateLabel}></Text>
                <Text style={[styles.expDateValue, styles.strokedText]}>
                  {item.expDate}
                </Text>
              </View>
              <Text style={[styles.ownerName, styles.strokedText]}>
                {item.ownerName}
              </Text>
            </View>

            <Image source={IMAGES.nfsChipIcon} style={styles.chipIcon}></Image>
            <Image
              source={IMAGES.payPassIcon}
              style={styles.payPassIcon}
            ></Image>
            <Image
              source={IMAGES[item.mpsIconId]}
              style={styles.mpsLogo}
            ></Image>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </View>
  );
};

export default Card;

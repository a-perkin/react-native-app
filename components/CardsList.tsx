import { Dimensions, FlatList, View } from "react-native";
import Card from "./Card";
import { CARDS } from "../constants/cards";
import { useState } from "react";
import { COLORS } from "../constants/colors";
import { styles } from "../constants/styles";

const { width: screenWidth } = Dimensions.get("window");

const CardListView = ({ navigation }) => {
  const data = CARDS;
  const [activeSlide, setActiveSlide] = useState(0);

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            {
              backgroundColor:
                index === activeSlide ? COLORS.mainText : COLORS.mainBackground,
            },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.cardListContainer}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.key.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Card item={item} navigation={navigation}></Card>
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / screenWidth
            );
            setActiveSlide(newIndex);
          }}
        />
        {renderPagination()}
      </View>
    </View>
  );
};

export default CardListView;

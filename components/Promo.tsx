import {
  View,
  FlatList,
  Image,
  Share,
  TouchableWithoutFeedback,
  RefreshControl,
} from "react-native";
import { styles } from "../constants/styles";
import { useEffect, useRef, useState } from "react";
import { promoData } from "../constants/promoData";
import { COLORS } from "../constants/colors";
import { getAddPromo, getPromo } from "../api/controller";

const Promo = ({ navigation }) => {
  const [data, setData] = useState(promoData);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [isGetPromo3, setIsGetPromo3] = useState(false);
  const [isGetPromo5, setIsGetPromo5] = useState(false);

  //load 5 items
  const loadAddData = () => {
    if (refreshing) return;
    setRefreshing(true);
    fetchAddPromoFromApi().then((result) => {
      if (!isGetPromo5) {
        const newData = data.concat(result);
        setData(newData);
        setIsGetPromo5(true);
      }
      setRefreshing(false);
    });
  };

  const fetchAddPromoFromApi = async () => {
    try {
      const result = await getAddPromo();
      return result;
    } catch (error) {
      console.error("Error while receiving data:", error);
    }
  };

  //refresh and load 3 items
  const onRefresh = () => {
    if (refreshing) return;
    console.log("onRefresh");
    setRefreshing(true);
    fetchPromoFromApi().then((result) => {
      console.log(result);
      if (!isGetPromo3) {
        const newData = data.concat(result);
        setData(newData);
        setIsGetPromo3(true);
      }
      setRefreshing(false);
    });
  };

  //auto load data 3 items
  useEffect(() => {
    setTimeout(onRefresh, 3000);
  }, []);

  const fetchPromoFromApi = async () => {
    try {
      const result = await getPromo();
      return result;
    } catch (error) {
      console.error("Error while receiving data:", error);
    }
  };

  //Share
  const onShare = async () => {
    const imgUrl = data[currentIndex].share;
    try {
      const result = await Share.share({
        url: imgUrl,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Share with", result.activityType);
        } else {
          console.log("Share successful");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Reject");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    //autoscroll
    const intervalId = setInterval(() => {
      if (refreshing) return;
      if (currentIndex == data.length - 1) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: 0,
        });
        setCurrentIndex(0);
      } else {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex + 1,
        });
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  //indicator
  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            {
              backgroundColor:
                index === currentIndex
                  ? COLORS.mainText
                  : COLORS.mainBackground,
            },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View>
      <View style={styles.promoContainer}>
        <FlatList
          ref={flatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          data={data}
          keyExtractor={(item, index) => index.toString()}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            flatListRef.current.index = index;
            setCurrentIndex(index);
          }}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={onShare}>
              <Image source={item.img} style={styles.promoImage}></Image>
            </TouchableWithoutFeedback>
          )}
          refreshControl={<RefreshControl refreshing={refreshing} />}
          onEndReached={loadAddData}
          onEndReachedThreshold={1}
        />
        {renderPagination()}
      </View>
    </View>
  );
};

export default Promo;

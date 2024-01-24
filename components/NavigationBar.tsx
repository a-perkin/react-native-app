import { TouchableWithoutFeedback, View } from "react-native";
import { styles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const NavigationBar = ({navigation}) => {
  return (
    <View style={styles.navigationContainer}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>
        <View>
          <Ionicons
            name="chevron-back-circle-outline"
            size={36}
            color={COLORS.mainText}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NavigationBar;

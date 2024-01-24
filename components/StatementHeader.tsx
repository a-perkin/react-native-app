import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/colors";
import FilterModal from "./FilterModal";

const StatementHeader = ({ onSearch, onSearchOpen }) => {
  const [presedFilter, setToggleFilter] = useState(false);
  const [presedSearch, setToggleSearch] = useState(false);

  const onPressFilter = () => {
    setToggleFilter(!presedFilter);
  };

  const onPressSearch = () => {
    setToggleSearch(!presedSearch);
    if (presedSearch) {
      onSearch("");
    }
  };

  const closeModal = () => {
    setToggleFilter(false);
  };

  const handleInputChange = (text: string) => {
    onSearch(text);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        onSearchOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        onSearchOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <View style={styles.statementHeaderContainer}>
        <View style={styles.hideInputContainer}>
          {presedSearch && (
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(text)}
              placeholder="Search..."
              placeholderTextColor={COLORS.secondaryText}
            ></TextInput>
          )}
        </View>
        <View style={styles.searchButton}>
          <TouchableWithoutFeedback onPress={onPressSearch}>
            <View>
              <MaterialIcons
                name="search"
                size={36}
                color={
                  presedSearch ? COLORS.mainBackground : COLORS.secondaryText
                }
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.filterButton}>
          <TouchableWithoutFeedback onPress={onPressFilter}>
            <View>
              <AntDesign
                name="filter"
                size={34}
                color={
                  presedFilter ? COLORS.mainBackground : COLORS.secondaryText
                }
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <FilterModal isVisible={presedFilter} onClose={closeModal} />
      </View>
    </>
  );
};

export default StatementHeader;

import React, { useState } from "react";
import { View, Modal, TouchableWithoutFeedback, Text } from "react-native";
import { styles } from "../constants/styles";

const FilterModal = ({ isVisible, onClose }) => {
  const [shouldCloseModal, setShouldCloseModal] = useState(true);

  const handleModalPress = () => {};

  const handleOverlayPress = () => {
    if (shouldCloseModal) {
      onClose();
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={handleModalPress}>
            <View style={styles.modalContainer}>
              <Text style={styles.textColor}>Your Modal Content</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default FilterModal;

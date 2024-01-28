import axios from "axios";
import { PROPERTIES } from "../properties";
import { CARDS } from "../constants/cards";
import { additionalPromoData3, additionalPromoData5 } from "../constants/promoData";

const API_URL = "http://192.168.0.109:5003/";
const useMock = PROPERTIES.useMock; 

export const getCards = async () => {
  try {
    const response = useMock ? CARDS : (await axios.get(`${API_URL}/cards`)).data;
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPromo = async () => {
  try {
    const response = useMock ? additionalPromoData3 : (await axios.get(`${API_URL}/promo`)).data;
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAddPromo = async () => {
  try {
    const response = useMock ? additionalPromoData5 : (await axios.get(`${API_URL}/add-promo`)).data;
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


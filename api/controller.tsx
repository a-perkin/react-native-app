import axios from "axios";
import { PROPERTIES } from "../properties";
import { CARDS } from "../constants/cards";

const API_URL = "http://192.168.0.109:5003/";
const useMock = PROPERTIES.useMock;

export const getCards = async () => {
  try {
    const response = useMock
      ? CARDS
      : (await axios.get(`${API_URL}/cards`)).data;
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

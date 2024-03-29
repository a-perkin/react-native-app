import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    width: 350,
    height: 80,
    borderRadius: 40,
    flexDirection: "row",
  },
  body: {
    flex: 0.7,
    marginTop: 16,
    marginLeft: 20,
    width: 200,
    height: 48,
    flexDirection: "row",
  },
  statementIcon: {
    width: 48,
    height: 48,
  },
  statemenDetails: {
    marginTop: 2.5,
    marginLeft: 10,
    height: 43,
    justifyContent: "center",
  },
  statementTitle: {
    color: COLORS.mainText,
    fontWeight: "bold",
    fontSize: 15,
  },
  statementDescription: {
    color: COLORS.secondaryText,
    fontSize: 15,
  },
  amount: {
    flex: 0.3,
    marginTop: 18,
    marginLeft: 10,
    marginRight: 20,
    width: 30,
    height: 44,
    borderRadius: 22,
    borderColor: "rgba(38, 36, 90, 1)",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    color: COLORS.mainText,
  },
  amountTextReplenishment: {
    color: COLORS.amountTextReplenishment,
  },

  textColor: {
    color: COLORS.mainText,
  },
  card: {
    width: 350,
    height: 220,
  },
  balance: {
    marginTop: 25,
    marginLeft: 35,
    width: 246,
  },
  balanceText: {
    fontSize: 28,
  },
  strokedText: {
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.5,
  },
  cardBackground: {
    borderRadius: 20,
  },
  requisites: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 117,
    marginLeft: 35,
    width: 246,
    height: 78,
  },
  pan: {
    fontSize: 20,
    color: COLORS.mainText,
  },
  expDate: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 34,
    marginLeft: 70.94,
    width: 55.57,
    height: 20,
    flex: 1,
    flexDirection: "row",
  },
  expDateLabel: {
    flex: 0.3,
    fontSize: 6,
    marginTop: 5.34,
    width: 13.57,
    height: 9.32,
    color: COLORS.mainText,
  },
  expDateValue: {
    flex: 0.65,
    color: COLORS.mainText,
    fontSize: 13,
    textAlignVertical: "center",
  },
  ownerName: {
    ...StyleSheet.absoluteFillObject,
    color: COLORS.mainText,
    fontSize: 15,
    marginTop: 60,
  },
  chipIcon: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 77.41,
    marginLeft: 42.24,
    width: 42.78,
    height: 32.59,
  },
  payPassIcon: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 82.3,
    marginLeft: 95.42,
    width: 17.99,
    height: 22.81,
  },
  mpsLogo: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 157.67,
    marginLeft: 259.82,
    width: 73.34,
    height: 45.33,
    borderRadius: 5,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  CardViewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 350,
    marginBottom: 30,
  },

  statementBackground: {
    width: 390,
    backgroundColor: COLORS.lightBackground,
    // marginTop: 50,
    alignItems: "center",
  },
  statementContainer: {
    width: 350,
    height: 450,
  },
  statementContainerOpen: {
    width: 350,
    height: 800,
  },
  statementSeparator: {
    marginVertical: 8,
  },
  statementHeaderContainer: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  hideInputContainer: {
    flex: 0.76,
    height: 40,
  },
  input: {
    backgroundColor: COLORS.mainBackground,
    color: COLORS.mainText,
    borderRadius: 20,
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    width: "100%",
  },
  searchButton: {
    flex: 0.12,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  filterButton: {
    height: 40,
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "101%",
    height: "40%",
    alignItems: "center",
    backgroundColor: "rgba(31, 40, 90, 0.97)",
    padding: 20,
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomWidth: 0,
    borderColor: COLORS.borderColor,
    elevation: 5,
  },
  mainScreenContainer: {
    flex: 1,
    flexDirection: "column",
  },
  mainScreenCardList: {},
  mainScreenStatisticContainer: {
    marginTop: 20,
    width: "100%",
    height: 400,
    alignItems: "center",
  },
  mainScreenStatistic: {
    width: 350,
    height: 400,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    backgroundColor: "rgba(13, 166, 255, 0.2)",
  },
  navigationContainer: {
    height: 50,
    backgroundColor: COLORS.lightBackground,
    justifyContent: "center",
    paddingLeft: 18,
  },
  cardListContainer: {
    backgroundColor: COLORS.lightBackground,
    width: "100%",
    height: 330,
    marginTop: 20,
    paddingTop: 50,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  promoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 308,
    height: 328,
    margin: 20,
  },
  promoImage: {
    borderRadius: 20,
  },
  containerStatementDetail: {
    padding: 16,
    backgroundColor: COLORS.lightBackground,
    flex: 1,
    flexDirection: "column",
  },
  statementInfoContainer: {
    flex: 0.5,
    alignItems: "center",
  },
  statementNav: {
    flex: 0.5,
  },
  statementInfo: {
    marginTop: 40,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    backgroundColor: "rgba(13, 166, 255, 0.2)",
    width: 340,
    alignItems: "center",
  },
  statementDetailsIconContainer: {},
  statementDetailsIcon: {
    width: 70,
    height: 70,
  },
  statementDetailsDate: {
    color: COLORS.mainText,
    fontSize: 15,
    padding: 10,
  },
  statementDetailsDesc: {
    color: COLORS.mainText,
    fontSize: 15,
  },
  statementDetailsAmount: {
    color: COLORS.mainText,
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 20,
    padding: 10,
  },
  statementDetailsTitle: {
    color: COLORS.mainText,
    fontSize: 15,
  },
});

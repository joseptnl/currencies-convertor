import { StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 13,
    marginBottom: 25,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#1d1d1d",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // That is the way it works on Android
    padding: 10,
    height: 125
  },
  dropdownBox: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRightColor: "#ddd",
    borderRightWidth: 1,
    overflow: "hidden",
    padding: 10,
    width: "45%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  flag: {
    borderRadius: "50%",
    width: 35,
    height: 35
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 0,
    padding: 10,
    flex: 1,
    textAlign: "right",
    overflow: "hidden",
    width: "75%",
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: 24
  },

  searchList: {
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: "#fff"
  },
  modalView: {
    padding: 20,
    width: windowWidth - 30,
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    display: "flex",
    width: windowWidth - 110,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  title: {
    color: "#000",
    padding: 20,
    marginHorizontal: 16,
    fontSize: 25
  },
  btn: {
    marginTop: 30
  },
  doneBtnText: {
    color: "#4169e1"
  },
  btnText: {
    fontSize: 24
  },
  output: {
    fontSize: 24
  }
});

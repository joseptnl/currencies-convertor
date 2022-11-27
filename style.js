import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    padding: 10,
    fontStyle: "Nato"
  },
  iconBtn: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    cursor: "pointer"
  },
  switchIcon: {
    transform: [{ rotate: "90deg" }]
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#fff"
  },
  btnText: {
    color: "#4169e1",
    fontSize: 20
  }
});

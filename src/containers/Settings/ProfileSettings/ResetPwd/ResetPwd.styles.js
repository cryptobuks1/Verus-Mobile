import { StyleSheet } from "react-native";
import Colors from '../../../../globals/colors';

export default styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
  },
  formLabel: {
    textAlign:"left",
    marginRight: "auto",
    color: Colors.quaternaryColor,
    fontFamily: 'Avenir-Book'
  },
  formInput: {
    width: "100%",
    color: Colors.quaternaryColor,
    fontFamily: 'Avenir-Book'
  },
  valueContainer: {
    width: "85%",
  },
  wifLabel: {
    backgroundColor: "transparent",
    marginBottom: '10%',
    paddingBottom: 0,
    fontSize: 22,
    color: Colors.quinaryColor,
    width: "85%",
    textAlign: "center",
    fontFamily: 'Avenir-Black'
  },
  buttonContainer: {
    width: "80%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addAccountButton: {
    height: 46,
    backgroundColor: Colors.infoButtonColor,
    marginTop: 15,
    marginBottom: 40,
    width: '60%'
  },
  cancelButton: {
    height: 46,
    backgroundColor: Colors.basicButtonColor,
    marginTop: 15,
    width: '35%'
  },
});
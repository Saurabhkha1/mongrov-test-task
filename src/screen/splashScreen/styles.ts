
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  green: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Colors.Green,
  },
  topGreen: {
    top: 0,
  },
  bottomGreen: {
    bottom: 0,
  },
  whiteScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.White,
  },
  image: {
    width: 200, 
    height: 200,
    position: 'absolute',
  },
  backgroundCircle: {
    position: 'absolute',
    backgroundColor: Colors.DarkGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
  
export default styles;
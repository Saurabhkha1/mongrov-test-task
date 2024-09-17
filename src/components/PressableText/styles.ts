import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default StyleSheet.create({
    button :{
        width: '100%', 
        height: 50, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        alignSelf: 'baseline', 
        backgroundColor: Colors.Green
    },
    title: {
        color: Colors.White
    }
});

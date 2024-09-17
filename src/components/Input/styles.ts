import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const paddingHorizontal = 10

export default StyleSheet.create({
    input :{
        height: 50,
        borderColor: Colors.Black,
        borderBottomWidth: 0.6,
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal,
    },
    error : {
        color: Colors.Red,
        alignSelf: 'flex-start',
        paddingHorizontal,
    }
});

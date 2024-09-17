import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.White,
        height,
        width: '90%'
    },
    input: {
        height: 50,
        borderColor: Colors.Black,
        borderBottomWidth: 0.6,
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    image: {
        position: 'absolute',
        width: 100,
        height: 100,
        left: width / 2 - 50,
        top: height / 2 - 50,
    },
    textContainer: {
        position: 'absolute',
        left: 0,
        top: 120,
    },
    text: {
        fontSize: 16,
        color: Colors.Black,
    },
    forgotPassword: {
        alignItems: 'flex-end', 
        width: '100%'
    },
    forgotText: {
        textAlign: 'right', 
        color: Colors.Grey
    },
    footer : {
        position: 'absolute', 
        bottom : 20,
        width: '100%',
        alignItems: 'center'
    },
    newUser: {
        marginTop: 20
    },
    signUp: {
        marginTop: -3
    }
});

export default styles;
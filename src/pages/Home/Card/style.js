import { StyleSheet } from "react-native";
import { colors } from "../../../util/global_values";

const style = StyleSheet.create({
    container:{
        backgroundColor: colors.secondaryPurple,
        margin: 5,
        alignItems: 'center'
    },
    label:{
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
    }
})

export default style;
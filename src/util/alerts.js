import Swal from "sweetalert2";
import { Alert, Platform } from "react-native";

export function showSimpleAlert(title,message){
    if(Platform.OS==='web'){
        Swal.fire({
            title: title,
            text: message,
            backdrop: "#65498f60",
        })
    } else {
        Alert.alert(title,message)
    }
}
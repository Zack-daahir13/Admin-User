
import { Alert, Linking } from "react-native";


export const usePhone = (serviceNum: string) => {
    try{
        Linking.openURL(serviceNum)
    }catch(error){
        Alert.alert('ERROR HAPPENED', `${error}`)
    }
    
}
import style from "./style.js";
import { View, useWindowDimensions, Image, Text, Pressable } from 'react-native'
import { images } from '../../../util/global_values'

export default function Card({navigation,page,title,img_src}){
    const { width, height } = useWindowDimensions()
    return(
        <Pressable
            onPress={()=>{
                navigation.navigate(page)
            }}
        >
            <View style={[{width: width*0.45, height: width*0.45},style.container]}>
                <Image
                    source={images[img_src]}
                    style={[{width: width*0.4,maxHeight: width*0.4, aspectRatio: 1},style.img]}
                />
                <Text style={[{width: width*0.35},style.label]}>{title}</Text>
            </View>
        </Pressable>
    )
}
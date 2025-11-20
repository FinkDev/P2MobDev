import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Animated,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
} from "react-native";

import Selector from "./src/components/Selector";
import { convert } from "../../util/temp_conversor";
import style from "./style";

export default function Temperature({ navigation }) {
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("—");

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  const { width } = useWindowDimensions();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function calcular() {
    if (!valor || !entrada || !saida) return;
    const result = convert(Number(valor), entrada, saida);
    setResultado(result);
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/modalBG.jpg")}
      style={style.background}
      resizeMode="cover"
    >
      <View style={style.topButtons}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../assets/images/back.png")}
            style={style.topIcon}
          />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={style.scrollContainer}>
        <Animated.View
          style={[
            style.container,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={style.title}>Conversor de Temperatura</Text>

          <Image
            source={require("../../../assets/images/temperature.png")}
            style={[style.heroImage, { width: width * 0.55 }]}
            resizeMode="contain"
          />

          <View style={style.form}>
            <Selector
              valor={valor}
              setValor={setValor}
              entrada={entrada}
              setEntrada={setEntrada}
              saida={saida}
              setSaida={setSaida}
            />

            <Pressable
              style={({ pressed }) => [
                style.button,
                pressed && { transform: [{ scale: 0.97 }] },
              ]}
              onPress={calcular}
            >
              <Text style={style.buttonText}>Calcular</Text>
            </Pressable>
          </View>

          <View style={style.resultBox}>
            <Text style={style.resultLabel}>Resultado</Text>
            <Text style={style.resultValue}>{resultado}</Text>
          </View>
        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
}

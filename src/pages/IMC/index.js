import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Animated,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import style from "./style";

export default function IMC({ navigation }) {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [status, setStatus] = useState("—");

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

  useEffect(() => {
    if (!imc) return;

    if (imc < 18.5) setStatus("Abaixo do peso");
    else if (imc < 25) setStatus("Peso normal");
    else if (imc < 30) setStatus("Sobrepeso");
    else if (imc < 35) setStatus("Obesidade I");
    else if (imc < 40) setStatus("Obesidade II");
    else setStatus("Obesidade III");
  }, [imc]);

  function calcular() {
    if (!altura || !peso) return;

    const result = (peso / (altura * altura)).toFixed(2);
    setImc(result);
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
          <Text style={style.title}>Calculadora de IMC</Text>

          <Image
            source={require("../../../assets/images/imc.png")}
            style={[style.heroImage, { width: width * 0.55 }]}
            resizeMode="contain"
          />

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={style.form}
          >
            <TextInput
              keyboardType="numeric"
              placeholder="Peso (ex: 80)"
              placeholderTextColor="#666"
              style={style.input}
              onChangeText={setPeso}
              value={peso}
            />

            <TextInput
              keyboardType="numeric"
              placeholder="Altura (ex: 1.70)"
              placeholderTextColor="#666"
              style={style.input}
              onChangeText={setAltura}
              value={altura}
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
          </KeyboardAvoidingView>

          <View style={style.resultBox}>
            <Text style={style.resultLabel}>Seu IMC</Text>
            <Text style={style.resultValue}>{imc ?? "—"}</Text>
            <Text style={style.resultStatus}>{status}</Text>
          </View>
        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
}

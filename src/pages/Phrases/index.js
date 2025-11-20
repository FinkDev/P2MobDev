import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Animated,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import style from "./style";
import rangePicker from "./util/rangePicker";
import { images } from "../../util/global_values";

export default function Phrases({ navigation }) {
  const { width } = useWindowDimensions();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  const [phrase, setPhrase] = useState("—");
  const list = [
    "A clareza virá, pause, respire e olhe com calma.",
    "A beleza esta na simplicidade das pequenas coisas.",
    "Não devemos nos preocupar com o que não podemos controlar.",
    "Não controlamos a situação, mas podemos controlar nossa reação a ela.",
    "Aprenda com o passado, viva o presente e molde o futuro.",
    "Não deixe que o medo de errar te impeça de tentar.",
    "Suas emoções são válidas, mas não precisam definir você.",
    "Não se compare às outras pessoas, mas sim a quem você era ontem.",
    "O passado se foi, o futuro virá, mas é no presente onde a mudança começa.",
    "Não existe um caminho certo ou errado, apenas a tua jornada",
  ];

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

  function gerarFrase() {
    const pick = list[rangePicker(0, list.length - 1)];
    setPhrase(pick);
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
          <Text style={style.title}>Frases Aleatórias</Text>

          <Image
            source={images["home_phrases"]}
            style={[style.heroImage, { width: width * 0.55 }]}
            resizeMode="contain"
          />

          <View style={style.card}>
            <Text style={style.cardText}>{phrase}</Text>
          </View>

          <View style={style.row}>
            <Pressable
              style={({ pressed }) => [
                style.button,
                pressed && { transform: [{ scale: 0.97 }] },
              ]}
              onPress={gerarFrase}
            >
              <Text style={style.buttonText}>Gerar</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                style.button,
                pressed && { transform: [{ scale: 0.97 }] },
              ]}
              onPress={() => setPhrase("—")}
            >
              <Text style={style.buttonText}>Limpar</Text>
            </Pressable>
          </View>
        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
}

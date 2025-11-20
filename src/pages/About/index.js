import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Animated,
  ImageBackground,
  useWindowDimensions,
  Linking,
} from "react-native";
import style from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function About({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const { width } = useWindowDimensions();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function openLink(url) {
    Linking.openURL(url).catch(() => {});
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/stacked-waves-haikei.png")}
      // source={require("../../../assets/images/homeBG.png")}
      style={style.background}
      resizeMode="cover"
    >
      <View style={{ flex: 1 }}>
        <View style={style.topButtons}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/back.png")}
              style={style.topIcon}
            />
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={style.scrollContainer}
          scrollEnabled={false}
        >
          <Animated.View
            style={[
              style.container,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
          >
            <Text style={style.title}>App feito por:</Text>

            <View
              style={{
                width: width * 0.5,
                height: width * 0.5,
                borderRadius: width * 0.5,
                shadowColor: "#fff",
                shadowOffset: { width: 3, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 10,
                marginVertical: 15,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/Fink.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: width * 0.5,
                }}
              />
            </View>

            <Text style={style.title}>Pedro Fink</Text>

            <Text
              style={[
                style.title,
                {
                  fontSize: 16,
                  fontWeight: "600",
                  opacity: 0.7,
                  marginTop: -2,
                },
              ]}
            >
              @FinkDev
            </Text>

            <View style={style.socialContainer}>
              <Pressable onPress={() => openLink("https://github.com/FinkDev")}>
                <FontAwesome name="github" size={40} color="#fff" />
              </Pressable>

              <Pressable
                onPress={() => openLink("https://instagram.com/Gallaxya_")}
              >
                <FontAwesome name="instagram" size={40} color="#fff" />
              </Pressable>

              <Pressable
                onPress={() =>
                  openLink("https://www.linkedin.com/in/pedro-fink-037116350")
                }
              >
                <FontAwesome name="linkedin-square" size={40} color="#fff" />
              </Pressable>
            </View>

            <View style={style.aboutCard}>
              <ScrollView style={{ maxHeight: 300 }}>
                <Text style={style.aboutText}>
                  {"   "}Este aplicativo foi desenvolvido como parte da 2º
                  Avaliação de Desenvolvimento para Dispositivos Móveis do curso
                  de Desenvolvimento de Software Multiplataforma da Fatec
                  Itaquera.
                  {"\n"}
                  {"\n"}
                  {"   "}A proposta principal foi criar uma aplicação mobile
                  completa, funcional e organizada, demonstrando na prática os
                  conhecimentos adquiridos ao longo do semestre.
                  {"\n"}
                  {"   "}Construído utilizando o ecossistema React Native com o
                  Expo, o projeto busca oferecer uma experiência fluida e
                  moderna em dispositivos Android e iOS.
                  {"\n"}
                  {"\n"}
                  {"   "}Ao longo do desenvolvimento, foram aplicados conceitos
                  de navegação entre telas, gerenciamento de login e sessão,
                  validação de dados, autenticação de usuários e criação de
                  interfaces responsivas, tudo pensado para tornar o uso simples
                  e intuitivo.
                  {"\n"}
                  {"   "}Entre as funcionalidades implementadas, o app integra o
                  cálculo de IMC, conversão de temperatura, lista de tarefas e
                  frases motivacionais. Cada módulo foi constrúido em sala de
                  aula e pensado como um pequeno estudo prático de lógica, UI/UX
                  e integração entre componentes, refletindo os desafios reais
                  do desenvolvimento mobile.
                </Text>
              </ScrollView>
            </View>
          </Animated.View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

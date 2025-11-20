import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Animated,
  useWindowDimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";

import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { images } from "../../util/global_values";
import style from "./style";

import { getLoggedUser, getUserTasks, saveUserTasks } from "../../util/db";

export default function ToDoList({ navigation }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [userId, setUserId] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  const { width, height } = useWindowDimensions();

  // Carregar animações iniciais
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

  // Carregar usuário + tarefas do AsyncStorage
  useEffect(() => {
    async function loadAll() {
      const user = await getLoggedUser();
      if (!user) return;

      setUserId(user.id);

      const stored = await getUserTasks(user.id);

      // Criar animações pros itens salvos também
      const animatedTasks = stored.map((item) => ({
        ...item,
        animated: {
          opacity: new Animated.Value(1),
          translateY: new Animated.Value(0),
        },
      }));

      setTasks(animatedTasks);
    }

    loadAll();
  }, []);

  // Salvar sempre que tasks mudar
  useEffect(() => {
    if (userId !== null) {
      const simpleTasks = tasks.map((t) => ({
        key: t.key,
        value: t.value,
        status: t.status,
      }));
      saveUserTasks(userId, simpleTasks);
    }
  }, [tasks, userId]);

  const addTask = () => {
    if (task.trim().length === 0) return;

    const animated = {
      opacity: new Animated.Value(0),
      translateY: new Animated.Value(20),
    };

    const newItem = {
      key: Math.random().toString(),
      value: task,
      status: 0,
      animated,
    };

    setTasks((prev) => [...prev, newItem]);
    setTask("");

    Animated.parallel([
      Animated.timing(animated.opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.spring(animated.translateY, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleStatus = (key) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, status: item.status ? 0 : 1 } : item
      )
    );
  };

  const removeTask = (key) => {
    const item = tasks.find((t) => t.key === key);
    if (!item) return;

    Animated.timing(item.animated.opacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setTasks((prev) => prev.filter((i) => i.key !== key));
    });
  };

  const EmptyList = () => (
    <Animated.View style={{ opacity: 0.7, paddingVertical: 40 }}>
      <Text style={style.emptyText}>Nenhuma tarefa ainda</Text>
    </Animated.View>
  );

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

      <View style={style.content}>
        <Animated.View
          style={[
            style.container,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={style.title}>Lista de Tarefas</Text>

          <Image
            source={images.home_todolist}
            style={[style.heroImage, { width: width * 0.45 }]}
            resizeMode="contain"
          />

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={style.form}
          >
            <TextInput
              placeholder="Digite uma tarefa"
              placeholderTextColor="#666"
              value={task}
              onChangeText={setTask}
              style={style.input}
            />

            <Pressable
              style={({ pressed }) => [
                style.button,
                pressed && { transform: [{ scale: 0.97 }] },
              ]}
              onPress={addTask}
            >
              <Text style={style.buttonText}>Adicionar</Text>
            </Pressable>
          </KeyboardAvoidingView>

          <View style={[style.listBox, { maxHeight: height * 0.45 }]}>
            <FlatList
              data={tasks}
              ListEmptyComponent={<EmptyList />}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.key}
              contentContainerStyle={{ paddingBottom: 10 }}
              renderItem={({ item }) => (
                <Animated.View
                  style={{
                    opacity: item.animated.opacity,
                    transform: [{ translateY: item.animated.translateY }],
                  }}
                >
                  <View style={style.taskCard}>
                    <Pressable
                      onPress={() => toggleStatus(item.key)}
                      style={style.checkButton}
                    >
                      {item.status === 0 ? (
                        <Fontisto
                          name="checkbox-passive"
                          size={30}
                          color="#333"
                        />
                      ) : (
                        <Fontisto
                          name="checkbox-active"
                          size={30}
                          color="#9358af"
                        />
                      )}
                    </Pressable>

                    <Text
                      style={[
                        style.taskText,
                        item.status === 1 && style.taskDone,
                      ]}
                    >
                      {item.value}
                    </Text>

                    {item.status === 1 && (
                      <Pressable onPress={() => removeTask(item.key)}>
                        <FontAwesome name="trash-o" size={28} color="#000" />
                      </Pressable>
                    )}
                  </View>
                </Animated.View>
              )}
            />
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

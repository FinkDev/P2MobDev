import AsyncStorage from "@react-native-async-storage/async-storage";

const USERS_KEY = "users";
const LOGGED_USER_KEY = "loggedUser";
const LOGIN_ACTIVE_KEY = "loginActive";

export async function registerUser({ name, email, password }) {
  const usersData = await AsyncStorage.getItem(USERS_KEY);
  const users = usersData ? JSON.parse(usersData) : [];

  if (users.find((u) => u.email === email)) {
    return [false, "email_exists"];
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password,
  };

  users.push(newUser);
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));

  await saveLoggedUser({ id: newUser.id, name: newUser.name });
  await setLoginActive(true);

  return [true, newUser.id];
}

export async function loginUser(email, password) {
  const usersData = await AsyncStorage.getItem(USERS_KEY);
  const users = usersData ? JSON.parse(usersData) : [];

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return [false, "invalid_credentials"];

  await saveLoggedUser({ id: user.id, name: user.name });
  await setLoginActive(true);

  return [true, user.id];
}

export async function removeUserAccount() {
  try {
    const loggedUser = await getLoggedUser();
    if (!loggedUser?.id) return false;

    const usersData = await AsyncStorage.getItem(USERS_KEY);
    const users = usersData ? JSON.parse(usersData) : [];

    const updatedUsers = users.filter((u) => u.id !== loggedUser.id);

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    await AsyncStorage.removeItem(LOGGED_USER_KEY);
    await AsyncStorage.setItem(LOGIN_ACTIVE_KEY, JSON.stringify(false));

    return true;
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
    return false;
  }
}

export async function saveLoggedUser(user) {
  return AsyncStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));
}

export async function getLoggedUser() {
  const data = await AsyncStorage.getItem(LOGGED_USER_KEY);
  return data ? JSON.parse(data) : null;
}

export async function removeLoggedUser() {
  return AsyncStorage.removeItem(LOGGED_USER_KEY);
}

export async function setLoginActive(active) {
  return AsyncStorage.setItem(LOGIN_ACTIVE_KEY, JSON.stringify(active));
}

export async function isLoginActive() {
  const value = await AsyncStorage.getItem(LOGIN_ACTIVE_KEY);
  return value ? JSON.parse(value) : false;
}

export async function logoutUser() {
  await removeLoggedUser();
  await setLoginActive(false);
}

export async function getUser() {
  return getLoggedUser();
}

export async function updateUserName(userId, newName) {
  const usersData = await AsyncStorage.getItem(USERS_KEY);
  const users = usersData ? JSON.parse(usersData) : [];

  const updatedUsers = users.map((u) =>
    u.id === userId ? { ...u, name: newName } : u
  );

  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

  await saveLoggedUser({ id: userId, name: newName });

  return true;
}

export async function saveUserTasks(userId, tasks) {
  try {
    await AsyncStorage.setItem(`tasks_${userId}`, JSON.stringify(tasks));
  } catch (err) {
    console.log("Erro ao salvar tarefas:", err);
  }
}

export async function getUserTasks(userId) {
  try {
    const data = await AsyncStorage.getItem(`tasks_${userId}`);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log("Erro ao buscar tarefas:", err);
    return [];
  }
}

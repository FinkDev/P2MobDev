import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  logoText: {
    position: "absolute",
    bottom: 15,
    fontSize: 26,
    color: "#fff",
    fontWeight: "600",
  },

  formContainer: {
    width: "88%",
    backgroundColor: "#fff",
    marginTop: "auto",
    marginBottom: "auto",
    paddingVertical: 40,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 24,
    color: "#65498f",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#f3f1f8",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },

  btn: {
    backgroundColor: "#65498f",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
  },

  btnLabel: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },

  secondaryText: {
    marginTop: 20,
    textAlign: "center",
    color: "#555",
  },

  link: {
    color: "#65498f",
    fontWeight: "600",
  },
});

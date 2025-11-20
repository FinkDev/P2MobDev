import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    backgroundColor: "#ffffffcc",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    fontSize: 18,
    color: "#222",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  box: {
    width: "100%",
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    color: "#444",
    fontWeight: "600",
    marginBottom: 6,
  },

  pickerWrapper: {
    width: "100%",
    backgroundColor: "#ffffffcc",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  picker: {
    width: "100%",
    height: 50,
    color: "#333",
    fontSize: 18,
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },

  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 50,
    paddingBottom: 100,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },

  topButtons: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    zIndex: 10,
  },

  topIcon: {
    width: 28,
    height: 28,
    tintColor: "#9354af",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 15,
    color: "#9358af",
    textShadowColor: "#c965cc90",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  heroImage: {
    height: 160,
    marginBottom: 40,
    tintColor: "#9354af",
  },

  form: {
    width: "85%",
    alignItems: "center",
    marginBottom: 25,
  },

  input: {
    width: "100%",
    backgroundColor: "#ffffffcc",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    fontSize: 18,
    color: "#222",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  button: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonText: {
    color: "#9358af",
    fontSize: 18,
    fontWeight: "600",
  },

  listBox: {
    width: "85%",
    backgroundColor: "#ffffffbb",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 16,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  checkButton: {
    width: 35,
    alignItems: "center",
  },

  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 19,
    color: "#222",
    fontWeight: "500",
  },

  taskDone: {
    textDecorationLine: "line-through",
    color: "#777",
  },

  emptyText: {
    fontSize: 20,
    color: "#444",
    fontWeight: "600",
    textAlign: "center",
  },

  emptySub: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    textAlign: "center",
  },
});

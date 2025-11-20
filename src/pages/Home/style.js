import { StyleSheet, Platform } from "react-native";

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
    paddingBottom: 60,
  },

  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    marginTop: 100,
  },

  topButtons: {
    position: "absolute",
    top: Platform.OS === "android" ? 60 : 20,
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
    tintColor: "#fff",
  },

  header: {
    marginBottom: 25,
    alignItems: "center",
  },

  greeting: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "400",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  username: {
    fontSize: 28,
    fontWeight: "700",
    color: "#9358af",
    textShadowColor: "#c965cc90",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "400",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginTop: 5,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    shadowColor: "#65498f",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  iconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  icon: {
    width: 45,
    height: 45,
    tintColor: "#65498f",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  button: {
    backgroundColor: "#fff",
    width: "60%",
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonText: {
    color: "#9358af",
    fontSize: 15,
    fontWeight: "600",
  },
});

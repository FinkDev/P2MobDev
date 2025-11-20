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
  },

  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 60,
  },

  topButtons: {
    position: "absolute",
    top: Platform.OS === "android" ? 60 : 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
    zIndex: 10,
  },

  topIcon: {
    width: 28,
    height: 28,
    tintColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  socialContainer: {
    flexDirection: "row",
    gap: 35,
    marginVertical: 15,
  },

  aboutCard: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    shadowColor: "#65498f",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    marginTop: 40,
  },

  aboutText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    textAlign: "justify",
  },
});

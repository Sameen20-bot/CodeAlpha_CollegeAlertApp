import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const AdminSettings = () => {
  return (
   <ImageBackground
      source={require("../../assets/images/background-signinup.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      
    </ImageBackground>
  )
}

export default AdminSettings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
})
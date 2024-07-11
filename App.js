import {SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import Carousel from './components/Carousel';


const App = () => {
  return (
    <SafeAreaView style= 
    {{
      flex: 1,
      backgroundColor: '#B8B8B8'
    }}>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8B8B8'
  },
});
export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductCard } from "./src/components/ProductCard";
import "./index.css";

export default function App() {

  return (
    <>

      <View style={styles.Cards}>
        <ProductCard image='https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' name='Saco' description='Saco de lana para el invierno' price={6}></ProductCard>
        <ProductCard image='https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' name='Pantalon' description='Pantalón jean' price={20}></ProductCard>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Cards: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#393E46',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

import { Product } from "../types/Product";
import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";
import CustomButton from "./CustomButton";

const styles = StyleSheet.create({
  container:{
    display:"flex",
    backgroundColor:"#222831",
    alignItems:"center",
    justifyContent:"center",
    height: "fit-content",
    width:200,
    borderRadius: 10,
    margin:15,
    paddingBottom:15,
  },
  Image:{
    height:150,
    width:"100%",
    borderRadius:15,
    marginBottom:10,
  },
  Text:{
    color:"#fff"
  },
  TitleText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:18,
    marginBottom:10,
  },
  Button:{
    backgroundColor:"#00ADB5",
    width:"fit-content",
    height:35,
    padding:10,
    borderRadius:15,
    borderStyle:"solid",
    borderWidth:1,
  }

});

interface CallbackFunction{
  ():void
}

export const ProductCard:React.FC<Product & {buttonColor?:string, callback?:CallbackFunction}>  = (props)=> {
  let {image, name, description, price, buttonColor: color, callback} =  props;
  const defaultOnclick = () => alert(`usted ha comprado ${name} con el precio de $${price}USD`);

  return <View style={styles.container}>
    <Image source={{uri:image}} alt={name} style={styles.Image}/>
    <Text style={styles.TitleText}>{name}</Text>
    <Text style={styles.Text}>{description}</Text>
    <Text style={styles.Text}>$ {price} USD</Text>

    <CustomButton title="Comprar" color={color ?? "#00ADB5"} onPress={callback ?? defaultOnclick}></CustomButton>
  </View>
}


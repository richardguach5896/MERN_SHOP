import { ReactElement } from "react";
import { Product } from "../types/Product";
import { View, Text, Image, StyleSheet } from "react-native";
import styled from 'styled-components';

const styles = StyleSheet.create({
  container:{
    borderStyle:"solid",
    borderWidth:1,
    
    
  }
});

export const ProductCard:React.FC<Product>  = (props)=> {
  let {image, name, description, price, } =  props;
  return <View style={styles.container}>
    <Image source={{uri:image}} alt={name}/>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
}


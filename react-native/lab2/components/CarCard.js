import {Image, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Button from "./Button";

const CarCard = ({car}) => {
  const navigation = useNavigation();
  return (
    <View style={{
      margin: 10,
      padding: 10,
      borderRadius: 20,
      borderWidth: 2,
    }}>
      <View style={{
        flexDirection: 'row',
        zIndex: 2,
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        alignItems: 'flex-start',
      }}>

      <Image source={{uri: car.brand}} style={{width: 40, height: 40}} />
        <View style={{
          backgroundColor: '#0000ff90',
          paddingVertical: 3,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}>
          <Text style={{color: 'white',}}>{car.model}</Text>
        </View>
      </View>
      <Image source={{uri: car.image}} style={{width: '100%', height: 200, marginBottom: 5,}} />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{car.name}</Text>
      <Button onPress={() => navigation.navigate("CarDetails", {car})} text={'View Details'}/>
    </View>
  );
};
export default CarCard;

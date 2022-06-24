import {Image, Text, View} from "react-native";
import {useRoute} from '@react-navigation/native'
import Button from "../components/Button";
const CarDetails = ({navigation}) => {
  const {car} = useRoute().params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{
        margin: 10,
        padding: 10,
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
        <Text style={{fontSize: 16,}}>{car.description}</Text>
      </View>
    </View>
  );
}
export default CarDetails

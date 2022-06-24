import {Text, View} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const UserCard = ({user}) => {
  return (
    <View style={{
      marginHorizontal: 10,
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingBottom: 10,
      borderRadius: 5,
      borderBottomWidth: 1,
    }}>
      <Text style={{fontSize: 20, fontWeight: 'bold',}}>{user.name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>

        <AntDesign name={"phone"} size={20} color={"blue"}/>
        <Text style={{fontSize: 16, marginLeft: 5}}>{user.phone}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons name={"email"} size={20} color={"blue"}/>
        <Text style={{fontSize: 16, marginLeft: 5}}>{user.email}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign name={"link"} size={20} color={"blue"}/>
        <Text style={{fontSize: 16, marginLeft: 5}}>{user.website}</Text>
      </View>
    </View>
  );
};
export default UserCard;

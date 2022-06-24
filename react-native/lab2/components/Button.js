import {Text, TouchableOpacity, View} from "react-native";

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{paddingVertical: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'darkblue'}}>
        <Text style={{color: 'white'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default Button;

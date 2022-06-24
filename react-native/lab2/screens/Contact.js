import {Alert, KeyboardAvoidingView, Text} from "react-native";
import {TextInput} from "react-native-paper";
import Button from "../components/Button";
import {useState} from "react";

const Contact = ({navigation}) => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const updateContactDetails = (key, value) => {
    setContactDetails((previous) => ({
      ...previous,
      [key]: value
    }));
  }
  const contact = () => {
    Alert.alert("Message Sent");
  }
  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white', padding: 10,}}>
      <Text>
        Name
      </Text>
      <TextInput value={contactDetails.name} onChange={value => updateContactDetails('name', value)} />
      <Text>
        Phone
      </Text>
      <TextInput keyboardType={"phone-pad"} value={contactDetails.phone} onChange={value => updateContactDetails('phone', value)} />
      <Text>
        Message
      </Text>
      <TextInput value={contactDetails.message} onChange={value => updateContactDetails('message', value)} multiline={true} numberOfLines={8} />
      <Button text={"Contact"} onPress={contact} />
    </KeyboardAvoidingView>
  );
}
export default Contact

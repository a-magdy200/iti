import {FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import UserCard from "../components/UserCard";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsersList(users);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList data={usersList} renderItem={({item}) => <UserCard user={item} />} />
    </View>
  );
};
export default Users

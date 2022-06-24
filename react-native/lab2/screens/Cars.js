import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import CARS_DATA from "../CARS_DATA";
import Loader from "../components/Loader";
import CarCard from "../components/CarCard";

const Cars = ({navigation}) => {
  const [carsList, setCarsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setCarsList(CARS_DATA);
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <Loader />
  }
  return <FlatList data={carsList} renderItem={({item}) => <CarCard car={item} />} />;
};
export default Cars;

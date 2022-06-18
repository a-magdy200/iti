import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import animalsData from './animals';
const AnimalCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: item.picture}} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardText}>{item.description}</Text>
      </View>
    </View>
  );
};
const App = () => {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAnimals(animalsData);
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appHeader}>
        <Text style={styles.appHeaderTitle}>Animals</Text>
      </View>
      <FlatList
        data={animals}
        renderItem={({item}) => <AnimalCard item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeader: {
    backgroundColor: 'darkblue',
    padding: 10,
  },
  appHeaderTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  cardContainer: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 18,
  },
});

export default App;

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import pokemon from './pokemonStore';

const Home = props => {
  const handlePress = pokemon => {
    props.selectPokemon(pokemon);
    props.history.push('pokemon');
  };
  return (
    <View>
      <FlatList
        data={pokemon}
        keyExtractor={pokemon => pokemon.number}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

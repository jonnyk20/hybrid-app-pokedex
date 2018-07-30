import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from './routing';
import Home from './Home';
import Pokemon from './Pokemon';

export default class App extends React.Component {
  state = {
    selectedPokemon: null
  };
  selectPokemon = selectedPokemon => {
    this.setState({
      selectedPokemon
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} selectPokemon={this.selectPokemon} />
              )}
            />
            <Route
              path="/pokemon"
              render={props => (
                <Pokemon
                  selectedPokemon={this.state.selectedPokemon}
                  {...props}
                />
              )}
            />
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  }
});

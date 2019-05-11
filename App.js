import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Router path='/:idSigno' Component={DetalhesSigno}/>
            <Router Component={ListaSignos}/>
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
});

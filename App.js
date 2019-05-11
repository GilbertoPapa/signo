import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListaSignos from './ListaSignos'
import {NativeRouter as Router,Switch, Route} from  'react-router-native'

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

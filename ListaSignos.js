import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import signos from './signo.json'


export default class ListaSignos extends Component {
    render() {
      return (
        <View style={style.container}>
        {
            signos.map((signo,key) =>(

                <Button>
                    key={key}
                    title={signo.nome}
                    onPress={()=> this.props.history.push('/',key)}
                </Button>
            ))}

        </View>
      )
    }
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 
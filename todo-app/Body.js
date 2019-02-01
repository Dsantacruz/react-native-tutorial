import React, { Component } from 'react';
import {
  Text, View, StyleSheet, FlatList,
} from 'react-native';

// create a component
class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <FlatList
          data={this.props.tareas}
          renderItem={ (elemento) => {console.log(elemento)} }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98FB98',
  },
});

export default Body;

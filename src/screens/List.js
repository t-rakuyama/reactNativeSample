import React from 'react';
import { store } from '../modules/memo'
import { StyleSheet, View, Text, Button } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

/**
 * List画面
 */
class List extends React.Component {
  render() {
    return (
      <View style = {styles.flexCenter}>
        <Text style = {styles.sectionTitle}>List</Text>
        <Text style = {styles.list}>現在のstore: {JSON.stringify(store.getState())}</Text>
        <Button
          title='GoTo Input'
          onPress = {() => this.props.navigation.navigate('Input')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  list: {
    marginBottom: 100,
  }
});

export default List;

// 再レンダリングどうするか
// https://qiita.com/sobameshi0901/items/6207a7c3d23d879c51b8

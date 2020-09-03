import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Stack2 extends React.Component {
  render() {
    return (
      <View style={styles.flexCenter}>
        <Text style={styles.sectionTitle}>Slack2</Text>
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
});

export default Stack2;
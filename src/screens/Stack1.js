import React from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Stack1 extends React.Component {
  render() {
    return (
      <View style={styles.flexCenter}>
        <Text style={styles.sectionTitle}>Slack1</Text>
        { <Button
          title='GoTo Stack2'
          onPress={() => this.props.navigation.navigate('Stack2')}
          /> }
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

export default Stack1;
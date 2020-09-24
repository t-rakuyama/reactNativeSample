import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Stack2 extends React.Component {
  state = {
    inputValue: '',
    texts: [],
  };

  // 入力文字をリストに保管する関数
  _onPress = value => {
    const texts = this.state.texts;
    texts.unshift( this.state.inputValue );
    this.setState({ texts })
  };

  // 文字入力時に入力文字を保管する関数
  _onChangeText = inputValue => {
    this.setState({ inputValue })
  };

  render() {
    return (
      <>
        {/* 文字入力フィールド */}
        <TextInput
          style={styles.textInput}
          value={this.state.inputValue}
          onChangeText={this._onChangeText}
        />
        {/* 追加ボタン */}
        <Button
          onPress={this._onPress}
          title="追加"
        />
        {/* 表示領域 TODO ここをコンポーネントに切り出すと綺麗になるかも */}
        <View>
          {this.state.texts.map( (value, index) => {return (<Text key={index}>{value}</Text>) })}
        </View>
      </>
    );
  }
}

// スタイル
const styles = StyleSheet.create( {
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Stack2;

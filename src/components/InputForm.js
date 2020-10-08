import React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

// redux系
import { connect } from 'react-redux'
import { addMemo } from '../modules/memo'

/**
 * inputForm コンポーネント
 */
class InputForm extends React.Component {
  state = {
    inputValue: '',
    texts: [],
  };

  /**
   * 入力文字をStateに保管する
   */
  _onChangeText = inputValue => {
    this.setState({ inputValue })
  };

  render() {
    return (
      <>
        {/* 文字入力フィールド */}
        <TextInput
          style = {styles.textInput}
          value = {this.state.inputValue}
          onChangeText = {this._onChangeText}
        />
        {/* 追加ボタン */}
        <Button
          onPress = {() => this.props.addMemo(this.state.inputValue)}
          title="追加"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  // textにjsonから取って来たデータを代入
  text: state.list.text,
})

const mapDispatchToProps = {
  // importしたactionCreatorを記述
  addMemo,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputForm);

// スタイル
const styles = StyleSheet.create( {
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

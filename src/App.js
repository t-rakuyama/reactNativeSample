/**
 * React Native Sample App
 */

// link https://reactnavigation.org/
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import screens
import List from './screens/List';
import InputForm from './components/InputForm';
import Input from './screens/Input';

// StackNavigator を生成
const AppNavigator = createStackNavigator(
  {
    List: List,
    InputForm: InputForm,
    Input: Input,
  },
  {
    initialRouteName: 'List' // 初期表示画面
  }
);

export default createAppContainer(AppNavigator);

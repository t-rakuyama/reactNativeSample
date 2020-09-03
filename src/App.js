/**
 * React Native Sample App
 */

// link https://reactnavigation.org/
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import screens
import Stack1 from './screens/Stack1';
import Stack2 from './screens/Stack2';

// StackNavigator を生成
const AppNavigator = createStackNavigator(
  {
    Stack1: Stack1,
    Stack2: Stack2,
  },
  {
    initialRouteName: 'Stack1' // 初期表示画面
  }
);

export default createAppContainer(AppNavigator);

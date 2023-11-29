import { SafeAreaView } from 'react-native';
import { AppStyles } from './App.styles';
import Home from './pages/home/home';

export default function App() {
  return (
    <SafeAreaView style={AppStyles.container}>
      <Home></Home>
    </SafeAreaView>
  );
}
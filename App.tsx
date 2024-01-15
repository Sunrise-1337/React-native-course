import 'react-native-gesture-handler';

import { Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppStyles } from './App.styles';
import { Navigation } from './navigation/Navigation';
import { useAppState } from './hooks/useAppState';

import inactive_placeholder from './assets/images/inactivePlaceholder/inactive_placeholder.jpg'
import { useInitApp } from './hooks/useInitApp';


export default function App() {
  const isAppActive = useAppState(),
        isDataLoaded = useInitApp();

  return (
    <SafeAreaProvider style={AppStyles.container}>
        {!isAppActive || !isDataLoaded &&
          <View style={AppStyles.placeholder_wrap}>
            <Image source={inactive_placeholder} style={AppStyles.placeholder_image}/>
          </View>
        }
        <Navigation />
    </SafeAreaProvider >
  );
}
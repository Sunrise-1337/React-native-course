import 'react-native-gesture-handler';

import { Image, View } from 'react-native';

import { FiltersContext } from './contexts/filters-context/filters-context';
import { FiltersState } from './models/filters-state.model';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppStyles } from './App.styles';
import { Navigation } from './navigation/Navigation';
import { useAppState } from './hooks/useAppState';

import inactive_placeholder from './assets/images/inactivePlaceholder/inactive_placeholder.jpg'


export default function App() {
  const [filtersState, setFiltersState] = useState<FiltersState>()

  const isAppActive = useAppState()

  return (
    <FiltersContext.Provider value={ {filtersState, setFiltersState} }>
      <SafeAreaProvider style={AppStyles.container}>
          {!isAppActive &&
            <View style={AppStyles.placeholder_wrap}>
              <Image source={inactive_placeholder} style={AppStyles.placeholder_image}/>
            </View>
          }
          <Navigation />
      </SafeAreaProvider >
    </FiltersContext.Provider>
  );
}
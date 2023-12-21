import 'react-native-gesture-handler';

import { FiltersContext } from './contexts/filters-context/filters-context';
import { FiltersState } from './models/filters-state.model';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppStyles } from './App.styles';
import { Navigation } from './navigation/Navigation';


export default function App() {
  const [filtersState, setFiltersState] = useState<FiltersState>()

  return (
    <FiltersContext.Provider value={ {filtersState, setFiltersState} }>
      <SafeAreaProvider style={AppStyles.container}>
        <Navigation />
      </SafeAreaProvider >
    </FiltersContext.Provider>
  );
}
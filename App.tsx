import { SafeAreaView } from 'react-native';
import { AppStyles } from './App.styles';
import Home from './pages/Home/Home';
import { FiltersContext } from './contexts/filters-context/filters-context';
import { FiltersState } from './models/filters-state.model';
import { useState } from 'react';

export default function App() {
  const [filtersState, setFiltersState] = useState<FiltersState>()

  return (
    <FiltersContext.Provider value={ {filtersState, setFiltersState} }>
      <SafeAreaView style={AppStyles.container}>
        <Home />
      </SafeAreaView>
    </FiltersContext.Provider>
  );
}
import { Provider } from 'react-redux';
import { Home } from './src/screens/Home';
import { store } from './src/store';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Home />
      </Provider>
    </NativeBaseProvider>
  );
}





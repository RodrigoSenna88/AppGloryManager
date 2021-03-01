import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#DCF0F1" translucent/>
    <View style={{flex: 1, backgroundColor: '#DCF0F1'}}></View>
  </>
  );

export default App;


import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabAction } from '@react-navigation/native';
import nintendo from './components/nintendo.jsx';
import xbox from './components/xbox.jsx';
import playstation from './components/play.jsx';
import nintendof from './assets/nintendof.png';
import xboxf from './assets/xboxf.png';
import psf from './assets/psf.png';
const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

     <Abas.Navigator>
      <Abas.Screen name="nintendo" component={ nintendo }  options = {{
            tabBarIcon: () => (
              <Image style={styles.icon} source={nintendof} />
              
            ),
      }}
      />

    <Abas.Screen name="xbox" component={ xbox }  options = {{
            tabBarIcon: () => (
              <Image style={styles.icon} source={xboxf} />
              
            ),
      }}
      />
        <Abas.Screen name="playstation" component={ playstation }  options = {{
            tabBarIcon: () => (
              <Image style={styles.icon} source={psf} />
              
            ),
      }}
      />

     
     </Abas.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 28,
    height: 28,
  }

});
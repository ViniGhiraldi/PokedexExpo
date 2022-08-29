import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import telaHome from './Componentes/TelaHome';
import Haxorus from './Componentes/Haxorus';
import Dragonite from './Componentes/Dragonite';
import Hydreigon from './Componentes/Hydreigon';
import Garchomp from './Componentes/Garchomp';
import CharizardX from './Componentes/CharizardX';

const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={telaHome}/>
        <Drawer.Screen name='Haxorus' component={Haxorus}/>
        <Drawer.Screen name='Dragonite' component={Dragonite}/>
        <Drawer.Screen name='Hydreigon' component={Hydreigon}/>
        <Drawer.Screen name='Garchomp' component={Garchomp}/>
        <Drawer.Screen name='Mega Charizard X' component={CharizardX}/>
        
      </Drawer.Navigator>

      {/* <BottomTab.Navigator>
        <BottomTab.Screen name='Home' component={telaHom}/>
        <BottomTab.Screen name='Descrição' component={telaDescricao}/>
        <BottomTab.Screen name='Biblioteca' component={telaBiblioteca}/>
        <BottomTab.Screen name='Rota' component={telaRota}/>
      </BottomTab.Navigator> */}

    </NavigationContainer>
  );
}

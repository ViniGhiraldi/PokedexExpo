import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import telaHom from './Componentes/TelaHome';
import telaDescricao from './Componentes/TelaDescricao';
import Dragonite from './Componentes/Dragonite';
import telaRota from './Componentes/TelaRotas';

const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={telaHom}/>
        <Drawer.Screen name='Descrição' component={telaDescricao}/>
        <Drawer.Screen name='Dragonite' component={Dragonite}/>
        <Drawer.Screen name='Rota' component={telaRota}/>
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

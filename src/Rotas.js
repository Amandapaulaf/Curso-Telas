import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from "./Telas/Servicos/index";
import Carrinho from "./Telas/Carrinho/index";
import { cores } from "./estilos";

const Tab= createBottomTabNavigator();

export default function Rotas(){
    return <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            activeTintColor: cores.roxo,
            inactiveTintColor: cores.claro,
            activeBackgroundColor: cores.roxo,
            inactiveBackgroundColor: cores.laranja,
            style:{
                height:70,
            },
            labelStyle: {
                width: '100%',
                flex:1,
                fontSize:16,
                fontWeight:'bold',
                lineHeight:21,
                marginTop:3,
                paddingTop:21,
                backgroundColor: cores.laranja,
            },
            keyboardHidesTabBar:true
        }}>
            <Tab.Screen name="serviços" component={Servicos}/>
            <Tab.Screen name="carrinho" component={Carrinho}/>
        </Tab.Navigator>
    </NavigationContainer>
}
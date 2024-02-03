import React from "react";
import { TouchableOpacity , Text} from "react-native";
import estilosFunction from './estilos';

export default function Botao({pequeno=false, invertido=false,valor, acao, estilos}){
    estilos= estilosFunction(pequeno,invertido);
return <TouchableOpacity
    style={[estilos.botao,estilos]}
     onPress={acao}>
    <Text style={estilos.valor}>{valor}</Text>
</TouchableOpacity>
}
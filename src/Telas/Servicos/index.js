import React from "react";
import { FlatList } from 'react-native';
import Item from "./Item";


const servicos = [
    {
        id: 1,
        nome: "banho",
        preco: 60.00,
        descricao: "banho para casos especificos"
    },
    {
        id: 2,
        nome: "vacina v4",
        preco: 104,
        descricao: "primeira dose"
    },
    {
        id: 3,
        nome: "antirrabica",
        preco: 80,
        descricao: "duracao de 12 meses"
    }
]

export default function Servicos() {
    return (<>
        <FlatList
            data={servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
        </>
    );
}
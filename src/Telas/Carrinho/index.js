import React from "react";
import {  FlatList } from 'react-native';
import Item from "./Item";
import StatusCarrinho from "../../Componentes/StatusCarrinho";


const servicos = [
    {
        id: 1,
        nome: "banho",
        preco: 60.00,
        descricao: "banho para casos especificos",
        quantidade:1
    },
    {
        id: 2,
        nome: "vacina v4",
        preco: 104,
        descricao: "primeira dose",
        quantidade:1
    },
    {
        id: 3,
        nome: "antirrabica",
        preco: 80,
        descricao: "duracao de 12 meses",
        quantidade:1
    }
]

export default function Carrinho() {
    const total= servicos.reduce((soma, {preco,quantidade}) => soma+ (preco*quantidade), 0)
    return ( <>
                <StatusCarrinho total={total}/>
                <FlatList
                    data={servicos}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={({ id }) => String(id)}
                />
        </>
    );
}
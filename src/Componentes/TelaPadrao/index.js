import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import estilos, { cores } from "../../estilos";
import estilosTela from "./estilos";

export default function TelaPadrao({ children }) {

    return <>
        <SafeAreaView style={estilosTela.ajusteTela}>
            <StatusBar backgroundColor={cores.roxo} />
            <KeyboardAvoidingView style={estilos.preencher}
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={estilosTela.ajusteTelaBaixo}/>
    </>
}
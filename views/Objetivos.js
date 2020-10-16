import React from 'react';
import {View, Image, Text} from "react-native";
import {css} from "../assets/css/Css";
import ObjetivoCada from './ObjetivoCada';

export default function Objetivos() {
    return (
        <View style={css.container}>
            <View style={css.container_row_principal}>
                <Image style={css.objetivo_arrow_left} source={require('../assets/images/arrow_left.png')}/>
                <Text style={css.text_objetivo}>OBJETIVO</Text>
                <Image style={css.objetivo_chart} source={require('../assets/images/chart.png')}/>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3}}/>
            <ObjetivoCada icon={'bo1'} text1={'FICAR SUSSA'} text2={'Relaxar, reduzir ansiedade e o strees'}/>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3}}/>
            <ObjetivoCada icon={'bo2'} text1={'OLHA A FOCA!'} text2={'Aumentar o foco'}/>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3}}/>
            <ObjetivoCada icon={'bo3'} text1={'DORMIR DE BOAS'} text2={'Dormir melhor'}/>
        </View>
    );
}
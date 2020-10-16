import React from 'react';
import {View, Image, Text} from "react-native";
import {css} from "../assets/css/Css";

export default function ObjetivoCada(props) {
    var imageName = `../assets/images/`+props.icon+`.png`;

    return (
        <View style={css.container_row}>
            <Image style={css.objetivo_bo} source={require(`../assets/images/bo1.png`)}/>
            <View style={css.container_column}>
                <Text style={css.text_objetivo_column_1}>{props.text1}</Text>
                <Text style={css.text_objetivo_column_2}>{props.text2}</Text>
            </View>
            <Image style={css.objetivo_arrow_right} source={require('../assets/images/arrow_right.png')}/>
        </View>
    );
}
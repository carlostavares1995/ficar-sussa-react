import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { css } from "../assets/css/Css";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Player() {

    return (
        <React.Fragment>
            <View style={css.player_pai_container}>
            <Icon name="close" size={30} color="red" style={css.icon_close}/>
                <View style={css.player_container}>
                    <Text > Animação que repesenta Objetivo </Text>
                </View>

                <View style={css.player_container}>
                    <Text> Player </Text>
                </View>

                <View style={css.player_container}>
                    <Icon name="add" size={100} color="#999" /> 
                </View>

                <View style={css.player_container}>
                    <Text> Nome do Objetivo </Text>
                </View>
            </View>
        </React.Fragment>
    )


}
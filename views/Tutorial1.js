import React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from "react-native";
import {css} from "../assets/css/Css";

export default function Tutorial1() {
    return (
        <View style={css.container}>
            <View>
                <Text style={css.text_tutorial}>
                    Seja bem-vindo ao "De Boas", onde você aprende meditação e fica sempre de boas.
                </Text>
            </View>
            <View>
                <Image style={css.image_tutorial} source={require('../assets/images/bo1.png')}/>
            </View>

            <View>
                <TouchableOpacity style={css.button_tutorial}>
                    <Text>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from "react-native";
import {css} from "../assets/css/Css";

export default function Tutorial1() {
    return (
        <View style={css.container}>
            <View>
                <Text style={css.text_tutorial}>
                    Você pode acompanhar sua evolução em ficar "De boas" com as nossas estatísticas inteligentes.
                </Text>
            </View>
            <View>
                <Image style={css.image_tutorial} source={require('../assets/images/bo3.png')}/>
            </View>

            <View>
                <TouchableOpacity style={css.button_tutorial}>
                    <Text>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from "react-native";
import {css} from "../assets/css/Css";

export default function Tutorial1() {
    return (
        <View style={css.container}>
            <View>
                <Text style={css.text_tutorial}>
                    É divertido e ajudamos você a ficar motivado com recompensas pelo seu empenho em ficar "De Boas"
                </Text>
            </View>
            <View>
                <Image style={css.image_tutorial} source={require('../assets/images/bo2.png')}/>
            </View>

            <View>
                <TouchableOpacity style={css.button_tutorial}>
                    <Text>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
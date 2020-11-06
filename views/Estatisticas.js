import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { css } from "../assets/css/Css";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Estatisticas () {
    return (
        <React.Fragment>
             <View style={css.container_estatistica}>
                <Image style={css.objetivo_bo} source={require(`../assets/images/bo1.png`)}/>
                <Text>Minha Estatisticas</Text>
             </View>
             
             <Text style={css.divisor}></Text>

             <View>
                 <Text>Meditações Realizadas</Text>
                 <Text>3 sessoes</Text>
             </View>

             <View>
                 <Text>Tempo Total Meditando</Text>
                 <Text>30:45</Text>
             </View>

             <View>
                 <Text>Objetivo Mais Utilizado</Text>
                 <Text>Nome Do Objetivo</Text>
             </View>
        </React.Fragment>
    )
}
import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, CheckBox } from "react-native";
import { css } from "../assets/css/Css";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Estatisticas () {
    return (
        <React.Fragment>
                <View style={css.container_estatistica}>
                    <Image style={css.objetivo_bo} source={require(`../assets/images/bo1.png`)}/>
                    <Text style={css.text_minha_estatistica}>Minha Estatisticas</Text>
                </View>
                
                <Text style={css.divisor}></Text>

            <View style={css.container_estatistica_pai}>
                <View style={css.conteudo_section}>
                    <View style={css.conteudo_checkbox}>
                        <CheckBox />
                        <Text style={css.text_checkbox}>Meditações Realizadas</Text>
                    </View>


                    <View style={css.acoes}>
                        <Text style={css.text_acao}> 3 sessoes</Text>
                    </View>
                </View>

                <View style={css.conteudo_section}>
                    <View style={css.conteudo_checkbox}>
                        <CheckBox />
                        <Text style={css.text_checkbox}>Tempo Total Meditando</Text>
                    </View>

                    
                    <View style={css.acoes}>
                        <Text style={css.text_acao}>30:45</Text>
                    </View>
                </View>

                <View style={css.conteudo_section}>
                    <View style={css.conteudo_checkbox}> 
                        <CheckBox />
                        <Text style={css.text_checkbox}>Objetivo Mais Utilizado</Text>
                    </View>



                    <View style={css.acoes}>
                        <Text style={css.text_acao}>Nome Do Objetivo</Text>
                    </View>
                </View>
             </View>

        </React.Fragment>
    )
}
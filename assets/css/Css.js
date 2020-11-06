import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

    container_row_principal: {
        marginTop: 40,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    container_row: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    container_column: {
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
    },

    text_objetivo: {
        fontSize: 22,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 110,
        marginRight: 110,
    },

    text_objetivo_column_1: {
        fontSize: 20
    },

    text_objetivo_column_2: {
        fontSize: 13
    },

    text_tutorial: {
        margin: 20,
        padding: 100,
        fontSize: 15,
    },

    image_tutorial: {
        width: 100,
        height: 100,
        margin: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    button_tutorial: {
        marginTop: 80,
        padding: 20,
        backgroundColor: "#f2938e",
        borderWidth: 0,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    objetivo_arrow_left: {
        width: 30,
        height: 30,
    },

    objetivo_chart: {
        width: 30,
        height: 30,
    },

    objetivo_bo: {
        width: 150,
        height: 150,
    },

    objetivo_arrow_right: {
        width: 45,
        height: 45,
        marginLeft: 30,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    player_pai_container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },

    player_container: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    icon_close: {
        marginLeft: 'auto',
        marginBottom: -100,
        marginRight: 25
    },

    container_estatistica: {
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
    },

    divisor: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }

});

export {css};
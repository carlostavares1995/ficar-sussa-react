import React from 'react';
import {View} from 'react-native';
import Tutorial1 from './views/Tutorial1';
import Tutorial2 from './views/Tutorial2';
import Tutorial3 from './views/Tutorial3';
import Objetivos from './views/Objetivos';
import Player from './views/Player';

export default function App() {
    return (
        <View>
            {/* {<Tutorial1 />} */}
            {/* {<Tutorial2 />} */}
            {/* {<Tutorial3 />} */}
            {/* <Objetivos /> */}
            <Player />
        </View>
    );
}

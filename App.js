import React from 'react';
import Card from './components/card';
import Content from './components/content';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Data from './components/homedata';
import {
    StyleSheet,StatusBar,
    View, ScrollView,
} from 'react-native';


const Home = ({navigation}) => {
    return (
        <ScrollView>
        <View style={styles.home}>
        {Data.map((item)=>{
            v++
            return (
                <Card
                press={ () => { navigation.navigate(item.name) }}
                img = {item.src}
                name = {item.name}
                />
                )
            })}
        <StatusBar barStyle="light-content"/>
        </View>
        </ScrollView>
    )
}

const VScode = () => {
    return (
        <View style={styles.container}>
            <Content Data={require('./components/data').vscode}/>
        </View>
    );
};

const Sublime = () => {
    return (
        <View style={styles.container}>
            <Content Data={require('./components/data').sublime}/>
        </View>
    );
};

const Neovim = () => {
    return (
        <View style={styles.container}>
            <Content Data={require('./components/data').nvim}/>
        </View>
    );
};

const Tiles = () => {
    return (
        <View style={styles.container}>
            <Content Data={require('./components/data').tiles}/>
        </View>
    );
};

const Iterm = () => {
    return (
        <View style={styles.container}>
            <Content Data={require('./components/data').iterm}/>
        </View>
    );
};

const Safari = () => {
    return (
        <View style={styles.container}>
            <Content Data={require('./components/data').safari}/>
        </View>
    );
};

const Finder = () => {
    return (
        <View style={styles.container}>
            <Content Data={require('./components/data').files}/>
        </View>
    );
};

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#0a84ff',
                        // color: '#ffffff',
                    },
                }}
            />
            <Stack.Screen name='VScode' component={VScode} />
            <Stack.Screen name='Sublime' component={Sublime} />
            <Stack.Screen name='Neovim' component={Neovim} />
            <Stack.Screen name='Tiles' component={Tiles} />
            <Stack.Screen name='Iterm' component={Iterm} />
            <Stack.Screen name='Safari' component={Safari} />
            <Stack.Screen name='Finder' component={Finder} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    home: {
        paddingVertical: 20,
        height: '100%',
    },
    container: {
        height: '100%',
        width: '100%',
    },
    switch: {
        marginHorizontal: 15,
    },
});

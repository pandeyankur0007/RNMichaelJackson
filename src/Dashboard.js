import React, { Component } from 'react';
import { SafeAreaView, Image, View, TouchableOpacity, navigation, FlatList, Text } from 'react-native';
import data from './list.json';

class Dashboard extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.results}
                    initialNumToRender={10}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.callFun(item)}>

                            <View style={{
                                flex: 1, flexDirection: "column", margin: 10,
                                borderWidth: 1,
                                borderStartWidth: 5,
                                borderStartColor: '#395A9A',
                                borderColor: '#BEBEBE'
                            }}>
                                {item.artworkUrl100 && <Image
                                    style={{
                                        height: 100,
                                        resizeMode: 'cover'
                                    }}
                                    source={{ uri: item.artworkUrl100 }} />}

                            </View>
                        </TouchableOpacity>
                    }
                />
            </SafeAreaView>
        );
    }
    callFun = (item) => {
        this.props.navigation.navigate('MainPage', { userdata: item })
    }

}

export default Dashboard

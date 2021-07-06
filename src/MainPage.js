import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Platform, View, Text, Image } from 'react-native';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { route: { params } = {} } = this.props;
        const { userdata } = params;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{
                    flex: 1, flexDirection: "column", margin: 10,
                    borderWidth: 1,
                    borderStartWidth: 5,
                    borderStartColor: '#395A9A',
                    borderColor: '#BEBEBE'
                }}>
                    {userdata.artworkUrl100 && <Image
                        style={{
                            height: 100,
                            width: 100,
                            margin: 10,
                            resizeMode: 'stretch',
                        }}
                        source={{ uri: userdata.artworkUrl100 }} />}

                    {userdata.artistName && <Text style={{
                        margin: 10
                    }}>{'ArtistName: ' + userdata.artistName}</Text>}

                    {userdata.collectionName && <Text style={{
                        margin: 10
                    }}>{'CollectionName: ' + userdata.collectionName}</Text>}

                    {userdata.trackName && <Text style={{
                        margin: 10
                    }}>{'TrackName: ' + userdata.trackName}</Text>}
                    {userdata.currency && <Text style={{
                        margin: 10
                    }}>{'Currency: ' + userdata.currency}</Text>}


                </View>

            </SafeAreaView>
        );
    }
}

export default MainPage

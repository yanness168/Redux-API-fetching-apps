import * as React from'react';
import { useEffect} from 'react';
import { connect } from 'react-redux'; //{connect} connects a React component with Redux store
import { View, Text, Button, Image, TextInput, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { fetchMemes } from '../redux/actions/fetchMeme'
import { store_name, store_url, clear_name, clear_url} from '../redux/actions/index'



const mapDispatchToProps =({fetchMemes, store_name, store_url, clear_name, clear_url}) 
const mapStateToProps = state => ({
    memes: state.apiF.items,
    status: state.apiF.loading,
    error: state.apiF.error,
    url: state.apiF.urls,
    name: state.apiF.names,
});

const GetMeme = ({u, memes, loading, error, fetchMemes, url, name, store_name, store_url, clear_name, clear_url}) => {
    useEffect(()=>{
        fetchMemes()
    },[])

    const handleOnClick = () =>{
        clear_url();
        clear_name();
        var maxNumber = 100;
        for (var i=0; i < 10; i++) {
            var b = Math.floor((Math.random() * maxNumber) + 1)
            store_url(memes[b].url);
            store_name(memes[b].name);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnClick} style={styles.bnt}>
                <Text style={styles.bText}>Get some memes!!!</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.memeList}
                data={url}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => 
                (<View styles={styles.flatlist}>
                    <Text>{name[index]}</Text>
                    <Image source={item} style={{ width:260, height:300, borderWidth:1, margin: 10, borderColor:'#FFB6C1'}}/>
                </View>)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
        backgroundColor: '#fff',
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        writingDirection: 'rtl',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        backgroundColor: "lightblue",
    },
    bnt:{
        height: 30,
        marginVertical: 10,
        backgroundColor: "lightgreen",
        borderRadius: 5,
    },
    bText: {
        padding:5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    memeList:{
        marginHorizontal: 300,
        width:"100%",
    },
    flatlist: {
        margin: 10,
        backgroundColor: 'black',
        backgroundWidth: 2,
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(GetMeme);
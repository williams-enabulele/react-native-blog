import React, { useContext, useEffect }  from 'react';
import { Text, View, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

    const { state, getBlogPosts, deleteBlogPost } = useContext(Context);
    useEffect(() => {
        getBlogPosts()
        navigation.addListener('didFocus', () => {
            getBlogPosts()
        })
        return () => {
            listener.remove()
        }
    },[]);

    return (
        
        <View>
            <FlatList
                data= {state}
                keyExtractor={ (item) => item.title}
                renderItem={({item}) => {
                    return (
                    <TouchableOpacity onPress={ () => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.rowStyle}>
                            <Text>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={ () => deleteBlogPost(item.id)}>
                                <Feather name="trash"  size="30 "/>    
                            </TouchableOpacity>
                        </View> 
                    </TouchableOpacity>)
                }}/>
        </View>
      
)
}
 
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')} >
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
        headerTitle: 'All Blog Post'
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 15
    }
});


export default IndexScreen
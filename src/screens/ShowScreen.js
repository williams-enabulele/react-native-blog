import React, {useContext} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ShowScreen = ( {navigation}) => {

    const id = navigation.getParam('id');
    const { state } = useContext(BlogContext)
    const blogPost = state.find((blogPost) => blogPost.id == id )
    return <View>
    
        <Text>{blogPost.content}</Text>
    </View>
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 15,
        padding: 20
    }
});


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})} >
                <MaterialCommunityIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
        ),
        headerTitle: 'Blog Post'
    }
}

export default ShowScreen;
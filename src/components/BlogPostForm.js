import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [ title, setTitle ] = useState(initialValues.title)
    const [ content, setContent ] = useState(initialValues.content)

    return    <View style={styles.container}>
    <View style={styles.card}>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput 
        style={styles.input} 
        value={title} 
        onChangeText={(newTitle) => setTitle(newTitle) }
        placeholder='Enter Title'/>
        <Text style={styles.label}>Enter Content</Text>
        <TextInput 
        style={styles.input} 
        value={content} 
        onChangeText={newContent => setContent(newContent)}
        placeholder='Enter Content'/>
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => onSubmit(title, content)}>
            <Text style={styles.text}>Save Blog Post</Text>
        </TouchableOpacity> 
    </View>
   
</View>
    
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },
    label: {
        fontSize: 18,
        color: 'gray',
        marginHorizontal: 5,
    },
    input: {
        fontSize: 20,
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    },
    button: {
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 15,
        color: 'red',
        marginBottom: 5
    },
    text: {
        color: '#fff'
    }
});



export default BlogPostForm
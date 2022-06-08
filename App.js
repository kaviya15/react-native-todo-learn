import React from 'react';
import {View , Text,StyleSheet} from 'react-native';
export default function App(){
    return(
        <View style={styles.task_container}> 

            <Text style={[styles.tasks , styles.odd_tasks]}>
                Task 1 
            </Text>
            <Text style={[styles.tasks , styles.even_tasks]}>
                Task 2
            </Text>
            <Text style={[styles.tasks , styles.odd_tasks]}>
                Task 3
            </Text>
            <Text style={[styles.tasks , styles.even_tasks]}>
                Task 4
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    task_container:{
        margin: 50
    },
    tasks:{
        borderWidth:2, // border : 1px solid black in react js
        margin:20,
        padding:15,
        paddingLeft:20,
        color:'black'

    },
    odd_tasks:{
        // borderStyle:'dotted',
        borderColor:'pink',
        backgroundColor:'pink'

    },
    even_tasks:{
        // borderStyle:'dashed',
        borderColor:'#ffdab9',
        backgroundColor:'#ffdab9'

    }
});
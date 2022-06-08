import React , {useState} from 'react';
import {View , Text,StyleSheet,TextInput,Button} from 'react-native';
export default function App(){
    const [tasks , setTasks] = useState(["Task1" , "Task2" , "Task3" , "Task4"]);
    const [newTask , setNewTask] = useState("");
    
    function setTaskname (value){
        setNewTask(value)
        console.log(value , newTask);
    }
    function addEvent(){
        console.log("clicked",tasks);
        setTasks([...tasks,newTask])
        setNewTask("")

    }
    return(
        <View style={styles.task_container}> 
            {
                tasks.map((ele,index)=>{
                    return(
                        <Text style={ [ styles.tasks , index%2 == 0 ? styles.even_tasks :styles.odd_tasks  ]} key={ele}>
                            {ele}
                        </Text>
                    )
                })
            }
    {/**
     * 
     * Add task to the state
     */}

     {/**
      * onChangeText function outside the box 
      */
      }
        {/* <View>
            <TextInput
            style={{margin:20,padding:15}}
            placeholder='Enter the Task'
            onChangeText={setTaskname}
            value={newTask}
            />
        <Button title='Add Task' onPress={addEvent}/>
        </View> */}

      {/**
       * 
       * onChangeText function with in the component 
       */}
        <View>
            <TextInput
            onChangeText={value=>setNewTask(value)}
            value={newTask}
            placeholder="Enter a new Task"
            style={{margin:20 , padding:15}}
            />
            <Button onPress={()=> { 
                setTasks([...tasks , newTask]);
                setTaskname("")
                
                } } title="Add new Task"/>
        </View>

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
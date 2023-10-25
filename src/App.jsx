/**
 * Sample React Native ToDoList
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './TodoForm';


function TodoList() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
    </SafeAreaView>
  );
}


export default TodoList;

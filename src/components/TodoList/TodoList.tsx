import { TodoType } from "@/types/types";
import React from "react";
import { View, FlatList } from "react-native";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <TodoItem title={item.title} isCompleted={item.isCompleted} />
        )}
      />
    </View>
  );
};

export default TodoList;

import Header from "@/components/Header/Header";
import TodoList from "@/components/TodoList/TodoList";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/types";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Buy bread",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Buy eggs",
    isCompleted: false,
  },
];

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const complitedTodos = todos.filter((t) => t.isCompleted);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header
        totalTodos={todos.length}
        completedTodos={complitedTodos.length}
      />
      <TodoList todos={todos} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BG,
  },
});

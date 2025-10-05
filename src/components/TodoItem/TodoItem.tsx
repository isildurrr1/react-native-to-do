import React from "react";
import StyledText from "../StyledText/StyledText";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/ui";
import StyledButton from "../StyledButton/StyledButton";

interface TodoItemProps {
  title: string;
  isCompleted: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
  return (
    <View style={styles.container}>
      <StyledText
        style={[{ textDecorationLine: isCompleted ? "line-through" : "none" }]}
      >
        {title}
        <StyledButton label="Delete" />
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BG,
  },
});

export default TodoItem;

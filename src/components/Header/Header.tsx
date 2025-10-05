import { StyleSheet, View } from "react-native";
import StyledText from "../StyledText/StyledText";
import { COLORS } from "@/constants/ui";
import React from "react";

interface HeaderProps {
  totalTodos: number;
  completedTodos: number;
}

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText>Header</StyledText>
        <StyledText>October 04, 2025</StyledText>
      </View>
      <StyledText>{`Completed ${totalTodos} / ${completedTodos}`}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BG,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default Header;

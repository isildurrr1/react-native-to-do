import { COLORS } from "@/constants/ui";
import { Text, TextProps, StyleSheet } from "react-native";

type StyledTextProps = TextProps;

const StyledText: React.FC<StyledTextProps> = ({ style, ...props }) => {
  return <Text style={[styles.base, style]} {...props} />;
};

export default StyledText;

const styles = StyleSheet.create({
  base: { color: COLORS.PRIMARY_TEXT },
});

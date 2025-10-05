import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "../StyledText/StyledText";
import { COLORS } from "@/constants/ui";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ReactNode;
};

const StyledButton: React.FC<StyledButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity style={styles.base} {...props}>
      {label && <StyledText>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLORS.PRIMARY_ACTIVE_BTN,
  },
});

export default StyledButton;

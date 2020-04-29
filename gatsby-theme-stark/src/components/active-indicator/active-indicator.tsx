/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface ActiveIndicatorProps {
  isActive?: boolean;
  isHovered?: boolean;
}

const ActiveIndicator = ({
  isActive,
  isHovered,
}: ActiveIndicatorProps): JSX.Element => {
  const getWidth = () => {
    if (isHovered) return "100%";
    if (isActive) return 24;
    return 0;
  };

  return (
    <Box
      data-testid="active-indicator"
      sx={{
        width: getWidth(),
        height: 4,
        borderRadius: 2,
        bg: "primary",
        transition: "0.3s",
        "&:child": {
          marginBottom: 20,
        },
      }}
    />
  );
};

export default ActiveIndicator;

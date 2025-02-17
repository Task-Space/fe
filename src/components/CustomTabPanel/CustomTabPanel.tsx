import { Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  padding: number;
}

const CustomTabPanel = ({
  children,
  value,
  index,
  padding,
  ...props
}: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && <Box padding={padding}>{children}</Box>}
    </div>
  );
};

export default CustomTabPanel;

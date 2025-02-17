import {
  Box,
  Chip,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular
  };
}

interface MultipleSelectProps<T> {
  data: T[];
  value: string[];
  setValue: (value: string[]) => void;
}

const MultipleSelect = <
  T extends {
    id: string;
    name: string;
  }
>({
  data,
  value,
  setValue,
  ...props
}: MultipleSelectProps<T>) => {
  const theme = useTheme();
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value }
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Select
      multiple
      size="small"
      id="domains"
      value={value}
      onChange={handleChange}
      renderValue={(selected: string[]) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}
      {...props}
      MenuProps={MenuProps}
    >
      {data.map(({ id, name }) => (
        <MenuItem key={id} value={name} style={getStyles(name, value, theme)}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MultipleSelect;

export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: {
    placeholder: string;
    items: Option[];
  };
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
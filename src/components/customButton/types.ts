export type ButtonProps = {
    onClick?: () => void;
    text: String;
    textColor: string;
    bgColor: string;
    disabled: boolean;
    loading?: boolean;
    roundedSize?: string;
    }
export interface IInput {
    name: string;
    value: string;
    placeholder: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

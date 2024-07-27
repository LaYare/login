export type TInputType = 'text' | 'password' | 'number' | 'email';

export interface InputProps {
  type: TInputType;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  hasError?: (isValid: boolean) => void;
}

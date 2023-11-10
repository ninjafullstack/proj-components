import { IconsEnum } from '@components/SvgIcon';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputSize = 'l' | 'm';

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  > {
  label?: string;
  className?: string;
  icon?: IconsEnum | null;
  errorMessage?: string;
  type: 'password' | 'text' | 'currency' | 'date';
  size: InputSize;
}

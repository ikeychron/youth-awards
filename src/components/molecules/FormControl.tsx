import { twMerge } from 'tailwind-merge';
import Input from '../atoms/Input';

interface iFormControl {
  label: string;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

const FormControl = ({ label, labelProps, inputProps }: iFormControl) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        {...labelProps}
        className={twMerge('text-sm font-medium', labelProps?.className)}
      >
        {label}
      </label>
      <Input {...inputProps} />
    </div>
  );
};

export default FormControl;


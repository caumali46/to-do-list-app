interface InputInterface {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, onChange }: InputInterface) {
  return (
    <input
      className="flex-1 rounded-md bg-app-300 p-5 outline-none focus:outline focus:outline-offset-2 focus:outline-app-400"
      value={value}
      onChange={onChange}
      type="text"
      placeholder="e.g. Make a healthy dinner"
    />
  );
}

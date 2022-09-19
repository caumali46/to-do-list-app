interface InputInterface {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, onChange }: InputInterface) {
  return (
    <input
      className="
        form-control
        block
        w-full
        px-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      value={value}
      onChange={onChange}
      type="text"
      placeholder="e.g. Make a healthy dinner"
    />
  );
}
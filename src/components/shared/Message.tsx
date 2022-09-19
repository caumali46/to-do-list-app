interface MessageInterface {
  text: string;
}

export function Message({ text }: MessageInterface) {
  return (
    <div className="flex h-24 w-full flex-col items-center justify-center">
      <h3 className="text-md font-base text-app-600 antialiased">{text}</h3>
    </div>
  );
}

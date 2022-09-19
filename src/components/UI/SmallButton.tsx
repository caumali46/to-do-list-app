interface SmallButtonInterface {
  imageSrc: string;
  alt: string;
  onClick: () => void;
}

export function SmallButton({ imageSrc, alt, onClick }: SmallButtonInterface) {
  return (
    <button
      onClick={onClick}
      className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-app-300 outline-none transition-colors focus:outline focus:outline-offset-2 focus:outline-app-400"
    >
      <img src={imageSrc} alt={alt} />
    </button>
  );
}

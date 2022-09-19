export function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row">{children}</div>
      <hr className="my-12" />
    </>
  );
}

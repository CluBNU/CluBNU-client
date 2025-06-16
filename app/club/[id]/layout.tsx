export default function ClubDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tablet:py-8 mx-auto max-w-[64rem]">
      <main>{children}</main>
    </div>
  );
}

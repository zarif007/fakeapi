import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // offset navbar height
  return (
    <section className="pt-28 md:pt-40">
      {/* @ts-expect-error server component */}
      <Navbar />
      {children}
    </section>
  );
}

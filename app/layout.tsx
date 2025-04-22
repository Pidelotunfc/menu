// app/layout.tsx

export const metadata = {
  title: "Carta Digital",
  description: "Menú de pedidos online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

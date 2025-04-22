// app/layout.tsx
import React from 'react';

export const metadata = {
  title: "Carta Digital",
  description: "Menú de pedidos online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

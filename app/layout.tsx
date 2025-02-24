import './globals.css';
import NavBar from './Components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NavBar /> {/* NavBar arriba */}
        {children}  {/* Contenido de la página */}
      </body>
    </html>
  );
}
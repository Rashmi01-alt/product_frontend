export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        <header className="bg-blue-600 text-white py-4 px-8">
          <h1 className="text-xl font-bold">Product Catalog</h1>
        </header>
        <main className="p-8">{children}</main>
        <footer className="text-center py-4 text-sm text-gray-500">
          © 2025 Product Catalog
        </footer>
      </body>
    </html>
  );
}

// layout.tsx
export const metadata = {
  title: 'Todo-List',
  description: 'Gerencie suas tarefas'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

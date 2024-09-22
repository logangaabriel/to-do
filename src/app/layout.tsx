// layout.tsx
export const metadata = {
  title: 'Todo-List',
  description: 'Gerencie suas tarefas'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
      style={{
        backgroundColor: '#A18AFF'
      }}>{children}</body>
    </html>
  );
}

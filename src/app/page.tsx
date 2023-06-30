'use client'
import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-10">
        <h1>Hey Npm-assistant</h1>
      </main>
    </ThemeProvider>
  );
}

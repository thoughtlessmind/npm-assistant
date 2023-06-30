"use client";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center p-24 bg-primary-10">
        <h1>Hey Npm-assistant</h1>
        <div className="flex items-center justify-center flex-grow w-full">
          <input
            placeholder="Search any npm package..."
            className="border rounded px-4 py-2 w-1/2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const params = new URLSearchParams({
                  query: search,
                }).toString();
                router.push(`/search?${params}`);
              }
            }}
          />
        </div>
      </main>
    </ThemeProvider>
  );
}

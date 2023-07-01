"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-10 p-24">
      <h1>Hey Npm-assistant</h1>
      <div className="flex w-full flex-grow items-center justify-center">
        <input
          placeholder="Search any npm package..."
          className="w-1/2 rounded border px-4 py-2"
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
  );
}

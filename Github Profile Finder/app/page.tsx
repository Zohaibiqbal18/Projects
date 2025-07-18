// app/page.tsx
import Search from "../components/Search"

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-center mt-4 font-bold text-4xl">GitHub Profile Finder</h1>
      <Search />
    </main>
  )
}

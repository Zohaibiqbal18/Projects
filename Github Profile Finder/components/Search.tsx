// app/components/Search.tsx
'use client'

import { useState } from 'react'
import ProfileCard from './ProfileCard'

export default function Search() {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState<any>(null)

  const handleSearch = async () => {
    if (!username) return
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    setProfile(data)
  }

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <div className="flex">
        <input
          className="flex-grow p-2 border rounded-l"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white mx-2 px-4  rounded-full"
        >
          Search
        </button>
      </div>

      {profile && <ProfileCard profile={profile} />}
    </div>
  )
}

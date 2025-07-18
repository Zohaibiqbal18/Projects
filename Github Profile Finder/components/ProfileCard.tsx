export default function ProfieCard({ profile }: { profile:any }){
    return(
        <div className="mt-6 p-4">
            <div className="flex items-center space-x-4">
                <img className="w-20 h-20 rounded-full" src={profile.avatar_url} alt="avatar" />
            </div>
            <div>
                <h2 className="text-xl font-bold">{profile.name || 'No Name'}</h2>
                <p className="text-sm text-gray-500">@{profile.login}</p>
            </div>
            <p className="mt-4 text-sm">{profile.bio || 'No bio available.'}</p>
            <div className="mt-4 flex gap-4">
                <span>📦 Repos: {profile.public_repos}</span>
                <span>👥 Followers: {profile.followers}</span>
                <span>🔁 Following: {profile.following}</span>
            </div>
        </div>
        
    )
}
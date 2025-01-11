import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/shelu18') // Correct GitHub API endpoint
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setData(data); // Set the fetched data
            })
            .catch(err => console.error('Error fetching data:', err)); // Handle errors
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {data ? (
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
                    <img
                        src={data.avatar_url}
                        alt={`${data.name}'s avatar`}
                        className="w-32 h-32 rounded-full mx-auto shadow-md mb-4"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
                    <p className="text-gray-600">@{data.login}</p>
                    <p className="mt-2 text-gray-700">{data.bio || 'No bio available'}</p>

                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {data.followers}
                            </h2>
                            <p className="text-sm text-gray-600">Followers</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {data.following}
                            </h2>
                            <p className="text-sm text-gray-600">Following</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {data.public_repos}
                            </h2>
                            <p className="text-sm text-gray-600">Repositories</p>
                        </div>
                    </div>

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
                    >
                        View GitHub Profile
                    </a>
                </div>
            ) : (
                <p className="text-gray-700 text-lg">Loading...</p>
            )}
        </div>
    );
}

export default Github;

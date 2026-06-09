import React from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
  const data = useLoaderData() ?? { followers: 0, avatar_url: '' }
    // const [data, setData] = React.useState([])
    // React.useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json)
    //         setData(json)
    //     })
    //     .catch(() => setData([]))
    // }, [])

  return (
    <div className="bg-gray-800 text-white p-4 text-lg text-center font-bold">
      github followers: {data?.followers ?? 0}
      <img className="inline-block w-10 h-10 rounded-full ml-2" src={data?.avatar_url ?? ''} alt="avatar" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching GitHub info:', error);
        return { followers: 0, avatar_url: '' };
    }
};
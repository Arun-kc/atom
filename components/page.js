import React, {useState} from 'react'
import axios from 'axios'
import Tweet from '../components/tweet'
//import { getTweets } from '../libs/twitter';

function Page({tweetData}) {

    //const tweet = getTweets(['1414491290486534147']);
    // const [tweetData, setTweetData] = useState(null)
    console.log(tweetData);
    // const id = selectedLink.split('/')[5]
    // console.log(id)
    // const {tweet, status} = axios.get(`/api/tweet/${id}`);
    // console.log(tweet);
    // console.log(status);
    // const bringTweet = async () => {
    //     try {
    //         const { data, status } = await axios.get(`/api/tweet/${id}`)
    //         console.log(data);
    //         console.log(status);
    //         setTweetData(data.data);
    //         console.log(tweetData);
    //     } catch (e) {
    //     }
    // }
    // console.log(bringTweet);
    
    return (
        <div className="bg-gray-50 min-h-screen flex justify-center px-10">
        <div className="absolute w-full max-w-lg">
            <div className="absolute top-12 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-12 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-48 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 opacity-1 relative space-y-4 -bottom-28">
                <div className="p-5 bg-gray-700 rounded-lg flex items-center justify-between space-x-8">
                    <div className="flex-1">
                    <p className="text-center font-mono text-sm text-pink-300">Create and share beautiful images of your tweets!!✨</p>
                    </div>
                </div>
            </div>
            <Tweet tweet={tweetData} />
        </div>
        </div>
    )
}

export default Page
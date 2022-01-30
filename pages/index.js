import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState} from 'react'
import Page from '../components/page'
import Header from '../components/header'

export default function Home() {
  const [selectedLink, setSelectedLink] = useState('1487622403920306179');
  const [tweetData, setTweetData] = useState(null);
  const getTweet = async () =>{
    try {
      setSelectedLink(selectedLink);
      const id = selectedLink.split('/')[5]
      const { data, status } = await axios.get(`/api/tweet/${id}`)
      console.log(data);
      console.log(status);
      setTweetData(data.data);
      console.log(tweetData);
  } catch (e) {
  }
  }
  return (
    <div>
      <Head>
        <title>Atom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setSelectedLink={setSelectedLink}/>
      <Page tweetData={getTweet}/>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState} from 'react'
import Page from '../components/page'
import Header from '../components/header'

export default function Home() {
  const [selectedLink, setSelectedLink] = useState('1487622403920306179');
  return (
    <div>
      <Head>
        <title>Atom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setSelectedLink={setSelectedLink}/>
      <Page selectedLink={selectedLink}/>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from '../components/page'

export default function Home() {
  //const [selectedLink, setSelectedLink] = useState();
  return (
    <div>
      <Head>
        <title>Atom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header setSelectedLink={setSelectedLink}/> */}
      <Page/>
    </div>
  )
}

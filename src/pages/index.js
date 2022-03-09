import Head from 'next/head'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/Navbar/index'
import { Circle } from '../components/common/Circle'
import { About } from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner/>
      <About />
    </div>
  )
}

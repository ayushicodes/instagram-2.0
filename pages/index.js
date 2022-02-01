import Head from 'next/head'
import Header from './components/Header'
import Feed from './components/Feed'

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide ">
        <Feed />
        {/* Modal */}

      </div>
    </>
  )
}

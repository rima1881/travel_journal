import Head from 'next/head'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/9e669c9765.js" crossorigin="anonymous"></script>

      </Head>
      <Header />
      <Main />
    </>
  )
}

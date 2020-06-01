import React from 'react'
import Head from 'next/head'
import MainContent from '../components/MainContent/MainContent'
import Layout from '../components/Layout/Layout'

const Home = () => (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Adventures-lab Test</title>
    </Head>

    <Layout>
      <MainContent />
    </Layout>
    </>
  )

export default Home

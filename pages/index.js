import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import MainContent from '../components/MainContent/MainContent'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <>
    <Head>
      <title>Adventures-lab Test</title>
    </Head>

    <Layout>
      <Header />
      <MainContent />
    </Layout>
    </>
  )
}

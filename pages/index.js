import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import MainContent from '../components/MainContent/MainContent'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
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
}

import React from 'react'
import Head from 'next/head'
import MainContent from '../components/MainContent/MainContent'
import Layout from '../components/Layout/Layout'

const Lab = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adventures-lab Lab</title>
      </Head>

      <Layout>
        <MainContent />
      </Layout>
    </>
  )
}

export default Lab

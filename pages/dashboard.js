import React from 'react'
import Head from 'next/head'
import MainContent from '../components/MainContent/MainContent'
import Layout from '../components/Layout/Layout'

const Dashboard = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adventures-lab Dashboard</title>
      </Head>

      <Layout>
        <MainContent />
      </Layout>
    </>
  )
}

export default Dashboard

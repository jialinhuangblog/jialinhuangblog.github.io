import { NextPage } from 'next'
import Layout from '@/components/Layout'

import JobCardList from '@/app/cv/JobCardList'

const CV: NextPage = () => {
  return (
    <Layout>
      <JobCardList />
    </Layout>
  )
}

export default CV

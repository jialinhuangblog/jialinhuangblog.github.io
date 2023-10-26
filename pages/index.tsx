import { NextPage } from 'next'
import Layout from '~/components/Layout'
import Profile from '~/components/Profile'

const Home: NextPage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  )
}
export default Home

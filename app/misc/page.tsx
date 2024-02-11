import { NextPage } from 'next'
import Layout from '@/components/Layout'
import MiscLinkList from '@/app/misc/MiscLinkList'

const Misc: NextPage = () => {
  return (
    <Layout>
      <MiscLinkList />
    </Layout>
  )
}
export default Misc

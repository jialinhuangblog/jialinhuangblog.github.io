import { Metadata, NextPage } from 'next'
import MessageBoard from '@/app/message-board/MessageBoard'
import Layout from '@/components/Layout'
export const metadata: Metadata = {
  title: 'Rick & Morty Quotes',
  description: '',
}
const MessageBoardPage: NextPage = () => {
  return (
    <Layout
      background='#e4bfa8'
      hideTaskbar={true}
    >
      <MessageBoard />
    </Layout>
  )
}
export default MessageBoardPage

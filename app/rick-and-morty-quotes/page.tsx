import { Metadata, NextPage } from 'next'
import Lines from '@/app/rick-and-morty-quotes/Lines'
export const metadata: Metadata = {
  title: '我的留言板',
}
const MessageBoardPage: NextPage = () => {
  return <Lines />
}
export default MessageBoardPage

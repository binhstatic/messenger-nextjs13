import getUsers from '../actions/getUsers'
import Sidebar from '../components/sidebar/Sidebar'
import UserList from './components/UserList'

export interface UsersLayoutProps {
  children: React.ReactNode
}

export default async function UsersLayout({ children }: UsersLayoutProps) {
  const users = await getUsers()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  )
}

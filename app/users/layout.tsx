import Sidebar from '../components/sidebar/Sidebar';

export interface UsersLayoutProps {
  children: React.ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutProps) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}

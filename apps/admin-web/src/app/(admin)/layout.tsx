import { redirect } from 'next/navigation';

function isAuthenticated() {
  // TEMP: always false
  // Will be replaced with cookie/session check
  return false;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated()) {
    redirect('/login');
  }

  return (
    <div>
      <header>Admin Header</header>
      <main>{children}</main>
    </div>
  );
}

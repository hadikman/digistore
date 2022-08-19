import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import LayoutWrapper from './layout-wrapper';

import styles from './layout.module.scss';

function Layout({ children }) {
  const { data: session, status } = useSession();
  let authentication = (
    <>
      <span style={{ margin: '5px' }}>لطفاً وارد شوید</span>
      <button onClick={() => signIn()}>ثبت نام</button>
    </>
  );

  if (session) {
    authentication = (
      <>
        <span style={{ margin: '5px' }}>
          <span>{session.user.name}</span> عزیز خوش آمدید
        </span>
        <button onClick={() => signOut()}>خارج شوید</button>
      </>
    );
  }

  console.log(session);
  console.log(status);

  // for server side loading
  // if (typeof window !== 'undefined' && status === 'loading') return null;

  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/" className="link">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
              <li>
                <Link href="/auth/sign-in">ثبت نام</Link>
              </li>
            </ul>
          </nav>
          <div>{authentication}</div>
        </header>
        <main>{children}</main>
      </section>
    </LayoutWrapper>
  );
}

export default Layout;

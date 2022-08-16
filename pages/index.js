import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Feed from '../components/Feed';

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push('/home');
    },
  });

  return (
    <div className='bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6'>
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel='icon' href='/linkedin.svg' />
      </Head>
      <Header />

      <main className='flex justify-center gap-x-5 px-4 sm:px-12'>
        <div className='flex flex-col md:flex-row gap-5 '>
          <Sidebar />
          <Feed />
        </div>
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Check if the user is authenticated on the server...
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

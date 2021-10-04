import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Let's Chat - Together we chat</title>
        <link rel="icon" href="https://lh3.googleusercontent.com/proxy/7MP4Kq4n9woCgz4k0x6JwzBxEU6tnY-2QTZ5QYUi4WK1a5jSHA9knCmm-OZcM8MufkFeVkXw0uOGk9lPsB6j7GGg1rCBpberFptTxDtMkF9qN3ytbx-lChe1pwsT35JkoFxs" />
      </Head>

      <Sidebar />
    </div>
  );
}

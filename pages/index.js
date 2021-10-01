import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Let's Chat - Together we chat</title>
        <link rel="icon" href="https://lh3.googleusercontent.com/proxy/CLf7cB9S_BIf4CbfNcu5gPr0jNygCvYlqZH95R9URAdsV06GS1LsItw93ZHE-2IzKYXgHgTzpwXJXpsjLEOZ7BC-ADFCGpk8Le5C2nmKjkahvttTi0LPYfdAFcx2iU6wAA_j" />
      </Head>

      <Sidebar />
    </div>
  );
}

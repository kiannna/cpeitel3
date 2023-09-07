import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Kianna Reyes, 19 years old, from Sta. Maria, Mexico, Pampanga. Dancing is my hobby. When it
comes to music, my preferences vary depending on my mood, although I often choose k-pop songs whenever I
feel like dancing. Sinigang and adobo are my favorite foods. Despite my love for dancing, I sometimes feels self-
conscious about my height, as I stand at only 4’11 or 5’. Alongside my interest in dance, I am a fan of BTS, I also
enjoy watching movies, although I tend to sleep halfway through most of the time.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
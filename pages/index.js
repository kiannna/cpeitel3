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
        <p>Hello! I'm <b>Kianna!</b> I am a software Developer.<br> You can contact me on <a href="https://www.facebook.com/reyeskianna/"> facebook</a></br></p>
        <p>10 Things That Require Zero Talent</p>
<ul>
        <li>1. Being On Time </li>
        <li>2. Making An Effort </li>
        <li>3. Being High Energy</li>
        <li>4. Having A Positive Attitude</li>
        <li>5. Being Passionate</li>
        <li>6. Using Good Body Language</li>
        <li>7. Being Coachable</li>
        <li>8. Doing A Little Extra</li>
        <li>9. Being Prepared</li>
        <li>10. Having A Strong Work Ethic</li>
  </ul>

  <p>My Expectations in this subject.</p>
<ul>
        <li>It will take a lo of hardwork to finish this course.</li>
        <li>I expect the course to cover topics that are relevant to current trends and developments in the IT industry. </li>
        <li>It can help me solve activities that require me to apply their knowledge to solve complex problems.</li>
  </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

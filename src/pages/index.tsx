import Head from 'next/head'
import Image from 'next/image'

import { SubscribeButton } from '~/components/SubscribeButton';
import Avatar from '../../public/images/avatar.svg';
import Clapping from '../../public/images/clapping.svg';

import styles from './home.module.scss';

export default function Home() {
  return (
   <>
     <Head>
      <title>Home | ig.news</title>
     </Head>

     <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <div>
          <Image src={Clapping} alt="" />
          <span>Hey, welcome</span>
        </div>
        <h1>
          News about <br />
          the <span>React</span> world.
        </h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>

      <Image src={Avatar} alt="Girl coding" />
     </main>
   </>
  )
}

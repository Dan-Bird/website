import { Montserrat, Raleway } from '@next/font/google';
import styles from './page.module.css';
import { GithubIcon } from '@/components/Icons/GithubIcon';
import { LinkedinIcon } from '@/components/Icons/LinkedinIcon';
import { EmailIcon } from '@/components/Icons/EmailIcon';

const montserrat = Montserrat({ subsets: ['latin'], weight: '800' });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '600'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={`${styles.name} ${montserrat.className}`}>
          Daniel Bird
          <span className={`${styles.tagline} ${raleway.className}`}>
            Frontend specialist balancing craftsmanship and pragmatism to
            deliver quality software solutions.
          </span>
        </h1>

        <p className={styles.description}>
          As a creative problem solver, I am focused on writing clean code and
          implementing XP practices to deliver robust, dynamic, and performant
          websites and web apps. My past experience as a Digital Designer has
          given me a keen attention to detail and the ability to consult in
          areas of UX, UI design, and development.
        </p>

        <div className={`${styles.linkContainer} ${raleway.className}`}>
          <a
            href="https://www.linkedin.com/in/birddaniel/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
            <h2>Linkedin</h2>
          </a>

          <a
            href="https://github.com/Dan-Bird"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <h2>Github</h2>
          </a>

          <a
            href="mailto:info@daniel-bird.co.uk"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
            <h2>Email</h2>
          </a>
        </div>
      </div>
    </main>
  );
}

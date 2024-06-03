import Image from 'next/image';
import styles from './aboutus.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}><span className='text-orange-500'>About</span> Us</h1>
      <div className={styles.section}>
        <div className={styles.image}>
          <Image src="/header@2x.png" alt="About Us" width={400} height={400} />
        </div>
        <div className={styles.text}>
          <h2>About Us</h2>
          <p>Your text information goes here. This is a brief description of your company.</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.text}>
          <p>More information about your company, services, or team members.</p>
        </div>
        <div className={styles.image}>
          <Image src="/header@2x.png" alt="Our Team" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

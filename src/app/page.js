import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.onload}>
        <Image className={styles.arrowKey} src="/arrowkey.png" alt="Arrow Keys" width={200} height={200} />
        <h2 className={styles.onloadText}>Use the arrow keys on your keyboard to scroll.</h2>
      </div>
      <div className={styles.header}>
        <div className={styles.headerItem}><h1><span>M</span><span>A</span><span>I</span><span>S</span><span>O</span><span>N</span> <span>E</span><span>O</span><span>L</span><span>E</span></h1></div>
        <div className={styles.nav}></div>
        <div className={styles.headerItem2}><button className={styles.ctaHeader}>Shop Now</button></div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>ELLE</h1>
          <h2 className={styles.heroSubtitle}>When nature takes the lead, your skin remembers.</h2>
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.bottomLeft}></div>
          <div className={styles.bottomRight}>
            <Image className={styles.bio} src='/bio.png' alt='bio' width={50} height={50}></Image>
            <h3>Crafted with certified organic ingredients, this formula draws its strength from nature itself. Pure, responsibly sourced actives work in harmony with your skin to regenerate, nourish, and respect its natural balance.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

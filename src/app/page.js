import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.onload}>
        <Image className={styles.arrowKey} src="/arrowkey.png" alt="Arrow Keys" width={200} height={200} />
        <h2 className={styles.onloadText}>Utilisez les flèches sur votre clavier pour défiler.</h2>
      </div>
      <div className={styles.header}>
        <div className={styles.headerItem}><h1><span>M</span><span>A</span><span>I</span><span>S</span><span>O</span><span>N</span> <span>E</span><span>O</span><span>L</span><span>E</span></h1></div>
        <div className={styles.nav}>
          <p>ELLE éternity</p>
        </div>
        <div className={styles.headerItem2}><button className={styles.ctaHeader}>Acheter</button></div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>ELLE</h1>
          <h2 className={styles.heroSubtitle}>Quand la nature reprend le dessus, votre peau se souvient.</h2>
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.bottomLeft}>
            <h3>Révélez l'éclat naturel de votre peau pendant la nuit grâce à un traitement régénérant inspiré par la nature.</h3>
            <p>Avec sa composition unique d'agents antioxydants dérivés de la vigne, la crème de jour antioxydante hydrate en profondeur la peau de votre visage et lisse les rides.</p>
          </div>
          <div className={styles.bottomRight}>
            <Image className={styles.bio} src='/bio.png' alt='bio' width={50} height={50}></Image>
            <h3>Élaborée avec des ingrédients certifiés biologiques, cette formule puise sa force dans la nature elle-même. Des actifs purs et responsables travaillent en harmonie avec votre peau pour régénérer, nourrir et respecter son équilibre naturel.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

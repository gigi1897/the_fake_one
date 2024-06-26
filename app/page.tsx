import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className="flex place-content-center">
        <Image src="/Logo.png" alt="Logo" width={300} height={7} />
      </div>
      <p className="text-center"> The faker street 45, 1815 Clarens<br /><br /></p>
      <ul className="flex place-content-center">
        <li className="mr-3">
          <a className={styles.NavMenuText} id="ceh" href="/contact">Contact & hours</a>
        </li>
        <li className="mr-3">
          <a className={styles.NavMenuText} id="menu" href="#">Menu</a>
        </li>
        <li className="mr-3">
          <a className={styles.NavMenuText} id="pe" href="#">Private events</a>
        </li>
        <li className="mr-3">
          <a className={styles.NavMenuText} id="brunch" href="#">Brunch</a>
        </li>
        <li className="mr-3">
          <a className={styles.NavMenuText} id="cocktails" href="#">Cocktails</a>
        </li>
      </ul>
      <br /><br />
      <div className="invisible sm:visible flex place-content-center">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2n6RXTqaeX4?si=86btoHEn6Q6h0x-_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </main>
  );
}

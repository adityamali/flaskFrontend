import Image from "next/image";
import styles from "./page.module.css";
import { Entry, Nav } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Entry />
    </main>
  );
}

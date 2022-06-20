import styles from "./Tiles.module.css"
import Link from "next/link"
export default function Tiles({data}) {
  return (
      <div className={styles.tileContainer}>
          <Link href="/{data.topic}/{data.id}">
              <p className={styles.data}>
                  {data.topic}
                </p>
          </Link>

      </div>
  )
}

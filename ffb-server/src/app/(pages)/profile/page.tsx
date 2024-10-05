"use client"

import styles from '../page.module.sass'

import ProfileContent from '@/components/profileContent';

export default function Profile() {

  return (
    <main className={styles.main}>
      <a href="/">
        <h1> FFB-Watcher Next.js Client</h1>
      </a>

      <div className={`${styles.flex} ${styles.centered}`}>
        <ProfileContent />
      </div>
    </main>
  )
}

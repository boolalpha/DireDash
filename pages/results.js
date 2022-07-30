import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import Header from '../components/Header'

import styles from '../styles/Results.module.css'

export default function Results() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emergency Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Header />

        <div className={styles.searchContainer}>
            <div className={styles.searchBarContainer}>
                <input className={styles.searchBar} type="text" placeholder="Search for buildings" />
                <img
                src="/img/search.png"
                className={styles.searchIcon}
                />
            </div>
            <a href="/results" className={styles.searchButton}>
                Search
            </a>
        </div>
        <div className={styles.resultsTitleContainer}>
            <h1 className={styles.resultsTitle}>Results</h1>
            <p className={styles.numberOfResults}>1 of 1</p>
        </div>

        <a href="/details" className={styles.resultElement}>
            <img src="/img/sampleBuildingTransparent.png" className={styles.resultElementImage}></img>
            <h2>Campione Building</h2>
            <h2>123 Esempio St.</h2>
            <img src="img/arrow.png" className={styles.resultArrow}></img>
        </a>
        
      </main>
    </div>
  )
}

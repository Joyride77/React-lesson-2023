import NavigationBar from "@/components/navigation.bar";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import React from "react"

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/theaters/list")
  const theaterData = await theaterRequest.json()
  console.log(theaterData);

  return {
    props: {
      theater: theaterData
    }
  }
}

export default function Home(props: any): JSX.Element {
  console.log(props);

  const side = typeof window ? "client" : "server"

  return (
    <div className={styles.myhtml}>
      <NavigationBar />
      <h1>Welcome</h1>
      <h2>You are currently on the {side}-side</h2>
      <Link href="/about">About Page</Link>
      <Link href="/contacts">Contact Page</Link>
      <Link href="/greeting/John?age=25">Greeting Page</Link>
      {/* <Link href="/post/2021-08-01/Joyride">Post Page</Link> */}
      <Link href={{
        pathname: "/post/[date]/[slug]",
        query: { date: "2023-07-07", slug: "Joyride" },
      }}>
        Post Page
      </Link>
    </div>
  )
}

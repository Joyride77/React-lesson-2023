import NavigationBar from '@/components/NavigationBar';
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home(props: any): JSX.Element {
  console.log(props);

  const side = typeof window ? "client" : "server"

  return (
    <div className='container'>
      <NavigationBar />
      <h2>You are currently on the {side}-side</h2>
      {/* <Link href="/about">About Page</Link>
      <Link href="/contacts">Contact Page</Link>
      <Link href="/greeting/John?age=25">Greeting Page</Link>
      <Link href={{
        pathname: "/post/[date]/[slug]",
        query: { date: "2023-07-07", slug: "Joyride" },
      }}>
        Post Page
      </Link> */}
    </div>
  )
}

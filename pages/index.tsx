import type { NextPage } from 'next'
import Head from 'next/head'
import Experience from '../components/Experience'
import FeaturedProjects from '../components/FeaturedProjects'
import Interests from '../components/Interests'
import ProfileCard from '../components/ProfileCard'
import Timeline from '../components/Timeline'

const Home: NextPage = () => {
  return (
    <div className="flex-col items-center justify-center py-10 dark:bg-gray-900">
      <Head>
        <title>Ninad Rao | Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileCard></ProfileCard>
      <FeaturedProjects></FeaturedProjects>
      <div className="py-5"></div>
      <Timeline></Timeline>
      <div className="py-5"></div>
      <Experience></Experience>
      <div className="py-5"></div>
      <Interests></Interests>
    </div>
  )
}

export default Home

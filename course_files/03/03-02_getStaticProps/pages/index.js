import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home({results}) {
  return (
      <ul>{results.map( result => {
          return(<li key={result.uri}><a href={result.url}>{result.title}</a></li>)
          }

      )}</ul>
  )
}

const API_KEY = "isG7Bwd25kNgnxoGh0c0N0KJPRB0IGdd"

export async function getStaticProps() {
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    const response = await fetch(URL)
    const data = await response.json()
    console.debug({data})
    return {
        props: {
            results: data.results
        }
    }
}
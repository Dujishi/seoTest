import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const imgContainer = useRef()
  const [imgSrc, setImgSrc] = useState('')


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.imgContainer} ref={imgContainer}>
        <img src={imgSrc} style={{ width: '1000px' }} />
      </div>
      <h1>测试页面2</h1>
      <ul>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
        <li>React 官方中文文档 – 用于构建用户界面的 JavaScript 库</li>
      </ul>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

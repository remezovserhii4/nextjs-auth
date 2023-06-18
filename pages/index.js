import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useCurrentUser } from "../hooks/users";
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user] = useCurrentUser();
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">
          Thank you - {user ? user.name : "stranger"} !
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mt-4 mb-4 fw-normal">
            This is sample for NextJS & MongoDB
            <br />
            click on SignIn if you have an account, 
            <br />
            If no, click on SignOut
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn px-4 gap-3">
              <Link href="/login">SignIn</Link>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn px-4"
            >
              <Link href="/signup">SignOut</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

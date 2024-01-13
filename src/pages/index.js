import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div className='main'>
          <Header />
          <section className='d-flex'>
            <span></span>
            <span>
              <h5>Your Fashion Friends</h5>
              <h1>Find your style here and make you incredible</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button>SHOP NOW</button>
            </span>
          </section>
        </div>
        <div className='container second'>
          <section>
            <h3>Product Baru</h3>
            <button>SHOP NOW</button>
          </section>
          <section>
            {[0, 1, 2].map((index) => (
              <div class="card">
                <img src="https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2683.jpg?w=360&t=st=1704199415~exp=1704200015~hmac=198a157224e9565b7cf4fec7b3c3228065ec76f58ab863a300b41bca6b9e6215" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">JAS WANITA</h5>
                  <p class="card-text">Jas wanita terbuat dari bahan flanel yang halus</p>
                  <a href="#" class="btn">SHOP NOW</a>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className='third d-flex'>
          <section>
            <p>Our Story</p>
            <h1>For People Who Love Style</h1>
            <p>Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed in placerat.</p>
            <p>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet pharetra.</p>
          </section>
          <section className='secThird'></section>
        </div>
        <div className='four container'>
          <section>
            <h1>What Costumer Say</h1>
          </section>
          <section>
            <div class="carousel slide" id="carouselExampleAutoplaying" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row row-cols-1 row-cols-md-2 g-4">
                    {[0, 1, 3, 4].map((index) => (
                      <div class="col">
                        <div class="card">
                          <img src="https://img.freepik.com/free-photo/portrait-young-female-student-chewing-pencil-cafe-getting-ready-her-passing-exams_197531-22624.jpg?t=st=1704971659~exp=1704972259~hmac=a0aff2f21a4ff4e986bf2bb4df4526a974bd6c9e4a59fcf6fd8f95b6f8d7e392" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Isabella</h5>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row row-cols-1 row-cols-md-2 g-4">
                    {[0, 1, 3, 4].map((index) => (
                      <div class="col">
                        <div class="card">
                          <img src="https://img.freepik.com/free-photo/close-up-photo-sensual-blonde-woman-pink-sunglasses-hiding-green-leaf_197531-20666.jpg?t=st=1704971659~exp=1704972259~hmac=24333d9f66376de4ff531553f1e93e3e7dc50fa2e30c6d56c6585c328a2aab19" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='five'>
        </div>
      </main>
    </>
  )
}

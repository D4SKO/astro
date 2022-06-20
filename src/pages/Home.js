import React from 'react'
import { Link } from 'react-scroll'
import vid from "../vid/vid.mp4"
import home1 from "../img/home/home1.jpg"
import home2 from "../img/home/home2.webp"
import home3 from "../img/home/home3.jpg"

function Home() {
  return (
    <div className="home">
        <div className="first">
            <video src={vid} autoPlay muted loop playsInline></video>
            <h1>Close to the stars</h1>
        </div>
        <div className="scroll_bottom">
                <h2>Découvrir le site</h2>
                <div className="txt">
                    <p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem quisquam animi ipsum ratione corrupti maxime quam neque omnis iure placeat ex nobis eum est, explicabo eligendi accusantium ducimus blanditiis repellendus quidem enim soluta facere! Impedit excepturi dignissimos doloremque amet aut veritatis reprehenderit placeat, possimus corrupti provident, laudantium praesentium consequatur delectus vitae quod atque exercitationem aspernatur, vero cupiditate saepe! Consequatur iure molestias ipsum tenetur? Labore porro blanditiis reprehenderit eveniet? Voluptatibus, repellendus aliquam consequatur perspiciatis officiis, numquam, iusto impedit eligendi cumque dolorum eaque reiciendis necessitatibus magnam rerum magni inventore voluptates accusantium nam exercitationem illum est nihil ducimus doloribus. Officiis ullam animi, vero, pariatur ab aperiam molestias sint voluptates, dolore eligendi beatae maiores quam in ex aut veniam dicta eius doloribus omnis repellendus! In, maiores facere vel reiciendis temporibus ratione necessitatibus deleniti ipsam officiis consequatur itaque facilis! Commodi, eligendi repellendus. Voluptas quasi accusantium laudantium ducimus nemo sunt neque doloremque placeat nihil totam.</p>
                    </p>
                </div>
                <Link smooth={true} duration={2000} to="arrow" className="scrollb">
                <div className="arrow"></div>
                </Link>
            </div>
        <div className="second">
            <h2>Catégories</h2>
        </div>
        <div className="trois">
            <div className="center">
                <div className="img">
                    <img src={home1} alt="" />
                </div>
                <div className="img">
                    <img src={home2} alt="" />
                </div>
                <div className="img">
                    <img src={home3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
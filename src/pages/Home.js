import React from 'react'
import { Link } from 'react-scroll'
import vid from "../vid/vid.mp4"
import home1 from "../img/home/home1.jpg"
import home2 from "../img/home/home2.webp"
import home3 from "../img/home/home3.jpg"
import cate1 from "../img/home/cate1.jpg"
import cate2 from "../img/home/cate2.png"
import cate3 from "../img/home/cate3.png"
import cate4 from "../img/home/cate4.png"
import cate5 from "../img/home/cate5.PNG"
import cate6 from "../img/home/cate6.png"
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
        <div className="first">
            <video src={vid} autoPlay muted loop playsInline></video>
            <h1>Close to the stars</h1>
        </div>
        <div className="scroll_bottom">
                <Link smooth={true} duration={2000} to="second"><p className='h2'>Découvrir le site</p></Link>
                <div className="txt">
                    <p>
                    Depuis pas mal de temps maintenant, je suis passionné par l’astronomie. Cela fait quelques années que je scrute le ciel chaque soir et essaie de repérer des planètes ou des constellations. Très vite l’envie de m’acheter un télescope est devenue importante. L’astronomie est un milieu qui parait assez fermé et compliqué. Et pourtant, avec peu de moyen et beaucoup d’envie, il est possible de se régaler les yeux. C’est ce que j’aimerais partager ici. Quels sont les trucs de bases à connaitre avant de penser à s’acheter du matériel ? Que peut-on vraiment voir depuis son jardin ? Avec ma petite expérience, je vais tenter de répondre à ces questions.                     </p>
                </div>
                <Link smooth={true} duration={2000} to="second" className="scrollb">
                <div className="arrow"></div>
                </Link>
            </div>
        <div className="second">
            <p className='h2'>Catégories</p>
        </div>
        <div className="choix">
          <div className="center">
            <div className="choix1">
              <div className="txt">
                <p className="titre">Le planétaire</p>
                <hr />
                <p>Découvre les objets à l'interieur de notre système solaire dans cette catégorie !</p>
                <div className="fleche"><i className="fa-solid fa-right-long"></i></div>
              </div>
              <img src={home1} alt="telescope" />
            </div>
            <div className="choix1">
            <div className="txt">
                <p className="titre">LE CIEL PROFOND</p>
                <hr />
                <p>Découvre les objets en dehors de notre système solaire !</p>
                <div className="fleche"><i className="fa-solid fa-right-long"></i></div>
              </div>
              <img src={home2} alt="systeme solaire" />
            </div>
            <div className="choix1">
            <div className="txt">
                <p className="titre">LES INSTRUMENTS</p>
                <hr />
                <p>Découvre quel type d'instruments utiliser pour quel observation.</p>
                <div className="fleche"><i className="fa-solid fa-right-long"></i></div>
              </div>
              <img src={home3} alt="stellarium" />
            </div>
          </div>
        </div>
        <div className="appli">
            <p className="h2">Les applications utiles</p>
            <div className="center">
                <div className="categorie">
                <i className="fa-solid fa-right-long"></i>
                    <div className="hover">
                    </div>
                    <div className="txt">
                        <div className="h2">SKYLIVE</div>
                        <hr />
                        <p className="para">Lorsqu'on souhaite observer avec son téléscope il vaut mieux d'abord se renseigner sur les condtions d'observations pour la nuit qui arrive. Avec cette apllication vous serez directement renseigné sur les perturbation atmosphérique. Malheuseument l'application ne se trouve que dans l'app store mais il existe des équivalents en ligne.</p>
                    </div>
                    <img src={cate1} alt="skylive" />
                </div>
                <div className="categorie">
                <i className="fa-solid fa-right-long"></i>
                    <div className="hover">
                    </div>
                    <div className="txt">
                        <div className="h2">ISS DETECTOR</div>
                        <hr />
                        <p className="para">Un grand classique des application astro ! Le passage de la station spatial internationalle est un évenement à ne pas manquer. Elle se situe à 400km d'altitude et file à 28.000km/h. Avec cette application pour smartphone soit au courant de chacun de ses passages au dessus de ta ville.</p>
                    </div>
                    <img src={cate2} alt="" />
                </div>
                <div className="categorie">
                <i className="fa-solid fa-right-long"></i>
                <div className="hover">
                    </div>
                    <div className="txt">
                        <div className="h2">LIGHT POLLUTION MAP</div>
                        <hr />
                        <p className="para">Les nuages ou les perturabtion atmospheriques ne sont pas les seuls à pouvoir vous ennuyer... En effet, de nos jours la pollution lumineuse est de plus en plus présente et malheureusement elle nous empêche de pouvoir observer dans de bonne conditions. Light Pollution Map place sur une carte les zones les plus exposées à cette pollution.</p>
                    </div>
                    <img src={cate3} alt="Light pollution Map" />
                </div>
                <div className="categorie">
                    <div className="hover">
                    </div>
                    <div className="txt">
                        <div className="h2">ISS DETECTOR</div>
                        <hr />
                        <p className="para">Un grand classique des application astro ! Le passage de la station spatial internationalle est un évenement à ne pas manquer. Elle se situe à 400km d'altitude et file à 28.000km/h. Avec cette application pour smartphone soit au courant de chacun de ses passages au dessus de ta ville.</p>
                    </div>
                    <img src={cate4} alt="ISS Detector" />
                </div>
                <div className="categorie">
                    <div className="hover">
                    </div>
                    <div className="txt">
                        <div className="h2">ISS DETECTOR</div>
                        <hr />
                        <p className="para">Un grand classique des application astro ! Le passage de la station spatial internationalle est un évenement à ne pas manquer. Elle se situe à 400km d'altitude et file à 28.000km/h. Avec cette application pour smartphone soit au courant de chacun de ses passages au dessus de ta ville.</p>
                    </div>
                    <img src={cate5} alt="iss detector" />
                </div>
                <div className="categorie">
                    <div className="hover">
                    </div>
                    <div className="txt">
                        <div className="h2">ISS DETECTOR</div>
                        <hr />
                        <p className="para">Un grand classique des application astro ! Le passage de la station spatial internationalle est un évenement à ne pas manquer. Elle se situe à 400km d'altitude et file à 28.000km/h. Avec cette application pour smartphone soit au courant de chacun de ses passages au dessus de ta ville.</p>
                    </div>
                    <img src={cate6} alt="iss detector" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
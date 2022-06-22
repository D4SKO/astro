import React from 'react'
import planet from "../img/planetaire/planet.svg"
import instruments from "../img/planetaire/instruments.jpg"
import planets from "../img/planetaire/planets.jpg"
import stellarium from "../img/planetaire/stellarium2.PNG"
import mercure from "../img/planetaire/planetdetour/mercure.png"
import venus from "../img/planetaire/planetdetour/venus.png"
import lune from "../img/planetaire/planetdetour/lune.png"
import mars from "../img/planetaire/planetdetour/mars.png"
import jupiter from "../img/planetaire/planetdetour/jupiter.png"
import saturne from "../img/planetaire/planetdetour/saturne.png"
import uranus from "../img/planetaire/planetdetour/uranus.png"
import neptune from "../img/planetaire/planetdetour/neptune.png"
import { Link } from 'react-scroll'

function Planetaire() {
  return (
    <div className="planetaire">
        <div className="first_contain">
            <h1>LE planétaire</h1>
        </div>
        <div className="second">
            <div className="button">
                <img src={planet} alt="logo" />
            </div>
            <p>Observer les planètes de notre système solaire directement depuis un télescope n’est pas aussi difficile qu’on pourrait le croire. Beaucoup de personnes qui souhaitent se lancer dans l’astronomie s’imaginent que c’est une tâche réservée aux astronomes de métier, aux physiciens ou autres scientifiques. Et pourtant, avec peu de budget, un peu d’entrainement et de patience, il est possible d’observer quelques merveilles de notre système. On peut voir les anneaux de Saturne, les bandes nuageuse de Jupiter, les cratères de la Lune ou encore les différentes phases de Mercure ou de Venus...</p>
        </div>
        <div className="choix">
          <div className="center">
            <div className="choix1">
              <div className="txt">
                <p className="titre">INSTRUMENTS</p>
                <hr />
                <p>Quel telescope acheter pour observer les planètes de notre système solaire </p>
                <div className="fleche"><i className="fa-solid fa-right-long"></i></div>
              </div>
              <img src={instruments} alt="telescope" />
            </div>
            <div className="choix1">
            <div className="txt">
                <p className="titre">LES PLANETES DU SYSTEME SOLAIRE</p>
                <hr />
                <p>Decouvrez les 7 planètes de notre système solaire et notre lune</p>
                <div className="fleche"><i className="fa-solid fa-right-long"></i></div>
              </div>
              <img src={planets} alt="systeme solaire" />
            </div>
            <div className="choix1">
            <div className="txt">
                <p className="titre">STELLARIUM : POUR TROUVER LES PLANETES</p>
                <hr />
                <p>Lorsqu'on début il est souvent difficile de trouver les objets qu'on veut observer. Avec l'application Stéllarium trouvez directement ce que vous chercher !</p>
                <div className="fleche"><i className="fa-solid fa-right-long"></i></div>
              </div>
              <img src={stellarium} alt="stellarium" />
            </div>
          </div>
        </div>
        <div className="bcc">
          <div className="center">
            <div className="img active">
              <img src={mercure} alt="mercure" />
            </div>
            <div className="img">
              <img src={venus} alt="venus" />
            </div>
            <div className="img">
              <img src={lune} alt="lune" />
            </div>
            <div className="img">
              <img src={mars} alt="mars" />
            </div>
            <div className="img">
              <img src={jupiter} alt="jupiter" />
            </div>
            <div className="img">
              <img src={saturne} alt="saturne" />
            </div>
            <div className="img">
              <img src={uranus} alt="uranus" />
            </div>
            <div className="img">
              <img src={neptune} alt="neptune" />
            </div>
          </div>
        </div>
        <div className="planet_card">
          <div className="center">
            <img src={mercure} alt="mercure" />
            <div className="infos">
              <div className="center2">
                <p className="titre">MERCURE</p>
                <hr />
                <p className='para'>Mercure est la première planète en partant du soleil. Elle se trouve à une distance moyenne de 58 millions de kilomètres de ce dernier. Vue de la terre, elle se trouve toujours proche du soleil et proche de l’horizon. C’est une planète assez peu observée en raison des conditions relativement difficiles. Il faut savoir que, comme elle se trouve proche de l’horizon, la planète est souvent « brouillée » par les turbulences atmosphériques. Mais cela reste quand même toujours un plaisir de l’observer de ses propres yeux.</p>
                <Link to="/mercure">Plus d'informations</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Planetaire
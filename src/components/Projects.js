// Import Assets
import Dwitter from '../assets/Dwitter1.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Dwitter</h3>
                    <img src={Dwitter} alt="Dwitter Page" />
                    <p>Decenteralized version of Twitter.All the tweets are being stored on Blockchain.
                        The Smart Contract is deployed on Ropsten Network.
                    </p>

                    <a href="https://dwitter-wheat.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Chirag018/Dwitter" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Image World</h3>
                    <img src={compound} alt="Image World Page" />
                    <p>Image World an NFT Marketplace, ie. made using Ethereum Blockchain and ERC-721 standard.
                        The Smart Contract id deployed on Polygon Network.
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Chirag018/NFT-MarketPlace" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>CoinStats </h3>
                    <img src={aave} alt="CHI token Page" />
                    <p>A Real-time Cryptocurrency tracking application with the help of Coingecko API.
                        It allows users to track flows of Crypto funds,Exchange token,etc.
                    </p>

                    <a href="crypto-tracker-3inqvrkna-chirag018.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Chirag018/Crypto-" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
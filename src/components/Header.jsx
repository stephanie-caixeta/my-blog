import './Header.css'

function Header() {
    const title = "𖦤 StephFM 𖦤";
    const subtitle = "tous les albums écoutés sur la newsletter"

    return (
        <header>:
            <nav>
                <a href="#"><img className="logo" src="../src/assets/logo.png" /></a>
                <a href="#" target="_blank">Spotify</a>
                <a href="https://stephfm.substack.com" target="_blank">Newsletter</a>
                <a href="#">Qui suis-je?</a>
            </nav>
            <img className="entete" src="../src/assets/entete.png" />
        </header>
    );
}

export default Header;
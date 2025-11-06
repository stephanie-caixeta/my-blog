import ArticleThumbnail from './ArticleThumbnail'
import './ArticleList.css'

function ArticleList() {
  

  const articles = [
    { image: '../src/assets/albums/clarence-smudge.jpg', year: 2024, title: "Smudge", artist: "Clarence", link:"https://stephfm.substack.com/p/stephfm-vol1?open=false#%C2%A7clarence-smudge", content: "Smudge de clarence est le dernier petit bijou du collectif français Flippin’ Freaks. Sorti le 13 Septembre, cet album annonce un début réussi pour le groupe et j’ai hâte de le voir passer dans mes salles de concerts lyonnaises préférées.", category: "album"},
    { image: '../src/assets/albums/losbitchos-talkietalkie.jpg', year: 2024, title: "Talkie Talkie", artist: "Los Bitchos", content: "Los Bitchos reviennent après leur premier album très justement appelé: Let The Festivities Begin. Talkie Talkie c’est justement ça: la fête bat maintenant son plein et tout va au mieux. En un mot, cet album est: funky.", link: "https://stephfm.substack.com/i/148917103/los-bitchos-talkie-talkie", category: "album"},
    { image: '../src/assets/albums/warmduscher-whalecity.jpg', year: 2018, title: "Whale City", artist: "Warmduscher", content: "Whale City est chaotique, mais je veux y habiter le plus longtemps possible. Déconstruit à souhait, l’album nous entraîne avec eux et c’est du fun garanti tout le long. J’ai du mal à faire quoi que ce soit d’autre quand je les écoute. Si vous avez besoin d’un petit (hem, grand) boost d’énergie, pas besoin de chercher plus loin.", link: "https://stephfm.substack.com/i/148917103/warmduscher-whale-city", category:"album" },
    { image: '../src/assets/albums/isolation-creaturelies.jpg', year: 2024, title: "Creature Lies", artist: "Isolation", content: "Creature Lies est le premier EP mille fois trop court d’Isolation, un groupe de post-punk français. C’est aussi mon seul achat de la semaine. La voix du chanteur est très prenante et l’ambiance générale de l’EP donne envie de sortir, le casque à fond dans les oreilles et d’ignorer le reste du monde. J’ai hâte de pouvoir les voir en concert!", link: "https://stephfm.substack.com/i/148917103/isolation-creature-lies", category: "EP" },
    { image: '../src/assets/albums/hypergal-pure.jpg', year: 2022, title: "Pure", artist: "Hyper Gal", link:"https://stephfm.substack.com/i/148917103/pure", content: "Ce premier album est beaucoup plus noisy qu’After Image. Il introduit tout de même très bien les contrastes du duo, notamment avec le son très saturé, la batterie et le chant répétitif vs. le synthé aérien, presque scifi-esque et la voix aigüe de Koharu Ishida. Ça fait vibrer les oreilles de la meilleure façon qui soit.", category: "album"},
    { image: '../src/assets/albums/hypergal-afterimage.jpg', year: 2024, title: "After Image", artist: "Hyper Gal", content: "Hyper Gal c’est Koharu Ishida au chant et Kurumi Kadoya à la batterie. Un duo plein de contraste et de contradictions. Entre jpop et noise, répétition et cassures hors du temps, elles savent nous entraîner dans leur monde avec le strict minimum. Et on les aime pour ça.", link: "https://stephfm.substack.com/i/148917103/after-image", category: "album"},
    { image: '../src/assets/albums/juliajacklin-dltkw.jpg', year: 2016, title: "Don't Let The Kids Win", artist: "Julia Jacklin", content: "L’album folk par excellence. J’ai été totalement envoûtée par son grain de voix et sa plume. Quand j’écoute cet album j’ai l’impression d’être au milieu d’une pièce vide où il n’y a qu’elle et moi, et elle me raconte des histoires. Rien d’autre n’importe que sa voix quand elle chante.", link: "https://stephfm.substack.com/i/148917103/dont-let-the-kids-win", category:"album" },
    { image: '../src/assets/albums/juliajacklin-crushing.jpg', year: 2019, title: "Crushing", artist: "Julia Jacklin", content: "Cet album sonne moins folk que le premier, le ton de sa voix peut-être? Une ambiance qui change un peu. C’est le genre d’albums for us girlies. Qui te serre le cœur et te l’ouvre en même temps.", link: "https://stephfm.substack.com/i/148917103/crushing", category: "album" },
    { image: '../src/assets/albums/juliajacklin-prepleasure.jpg', year: 2022, title: "Pre Pleasure", artist: "Julia Jacklin", link:"https://stephfm.substack.com/i/148917103/pre-pleasure", content: "Bon. C’est là où les choses sérieuses commencent, et c’est pourtant l’album dont je parlerai le moins. Tout est personnel pour moi dans ce disque. Elle a posé des mots sur des choses auxquelles je ne pensais plus vraiment. C’est l’album le plus intime à mes yeux — parce qu’il me parle directement, intimement. Et j’en dirai pas plus. Peut-être qu’un jour j’oserai écrire pleinement tout ce que cet album représente pour moi.", category: "album"},
    { image: '../src/assets/albums/rm-rpwp.jpg', year: 2024, title: "Right Place, Wrong Person", artist: "RM", content: "Depuis sa sortie en mai dernier, j’écoute très régulièrement cet album. RM, le jeune leader de BTS, est un artiste à part entière et il a encore su démontrer ses talents à travers cet album. C’est frais, c’est déconstruit, c’est surprenant, c’est expérimental à souhait. Je suis biaisée parce que c’est mon artiste préféré; pourtant il s’est débrouillé pour me surprendre encore une fois.", link: "https://stephfm.substack.com/i/148917103/rm-right-place-wrong-person", category: "album"},
    { image: '../src/assets/albums/soundtrack-ticktickboom.jpg', year: 2021, title: "Tick, tick... BOOM!", artist: "Soundtrack", content: "C’est une surprise pour personne, mais je suis extrêmement fan de comédies musicales. À la sortie de ce film il y a trois ans, j’ai fait une fixette dessus. Je l’ai vu, puis revu, puis montré à mon copain, puis montré à ma sœur, puis montré à d’autres amis… Bref, j’ai pas arrêté.", link: "https://stephfm.substack.com/i/148917103/netflix-movie-soundtrack-tick-tick-boom", category:"album" },
    { image: '../src/assets/albums/cdr-cassette2.jpg', year: 2021, title: "Cassette 2", artist: "CDR", content: "De l’idm japonais très fun découvert par hasard sur YouTube. J’ai été attirée par la cover, j’avoue. La plupart des chansons sont à écouter dehors, pendant une journée ensoleillée, pas totalement sobre peut-être?", link: "https://stephfm.substack.com/i/148917103/cdr-cassette", category: "album" },
    { image: '../src/assets/albums/viagraboys-streetworms.jpg', year: 2018, title: "Street worms", artist: "Viagra Boys", link:"https://stephfm.substack.com/i/148917103/viagra-boys-street-worms", content: "Premier album d’un groupe de post-punk suédois. Plutôt sympa pour le coup! J’ai beaucoup aimé le saxophone — tout ce qui a du saxophone c’est forcément un oui pour moi.", category: "album"},
    { image: '../src/assets/albums/restobasket-leseum.png', year: 2024, title: "Le Seum", artist: "Resto Basket", content: "On enchaîne avec un autre debut d’un groupe de punk, mais cette fois c’est un groupe français! Cet EP est un vent de fraîcheur et de fun. C’est toujours cool de trouver du punk francophone.", link: "https://stephfm.substack.com/i/148917103/resto-basket-le-seum", category: "EP"},
    { image: '../src/assets/albums/maruja-connlaswell.jpg', year: 2024, title: "Connla's Well", artist: "Maruja", content: "Un autre EP! J’ai rarement entendu des chansons avec une atmosphère aussi prononcée et particulière. Le chanteur est génial et on peut tout ressentir dans sa voix.", link: "https://stephfm.substack.com/i/148917103/maruja-connlas-well", category:"EP" },
    { image: '../src/assets/albums/softplay-heavyjelly.jpg', year: 2024, title: "Heavy Jelly", artist: "Soft Play", content: "Du punk pur et dur et fun. Comme tout punk devrait être. Ça me donne juste envie de bouger mon corps de façon absurde. Et comme à chaque fois avec le punk: LIVE WHEN?", link: "https://stephfm.substack.com/i/148917103/soft-play-heavy-jelly", category: "album" }
    ];

    return (
    <>
    <section className="rowList">
      {articles.map((article) => 
      <ArticleThumbnail
        image={article.image}
        year={article.year}
        title={article.title}
        artist={article.artist}
        content={article.content}
        link={article.link}
        category={article.category}
      />
      )}
    </section>
    </>
  )
}

export default ArticleList;
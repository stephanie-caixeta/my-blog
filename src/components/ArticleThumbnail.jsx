import './ArticleThumbnail.css'

 function ArticleThumbnail({image, id, title, artist, content, category, link, year}) {


 return ( 

    <figure className='articleCard'>
      <img src={image} />
      <figcaption>
        <h2>{title} ({year})</h2>
        <h3>de: {artist}</h3>
        <p>{content}</p>
        <p>La suite sur <a href={link} target="_blank">la newsletter!</a></p>
        <p>Catégorie: <a href="#" className="category">{category}</a></p>
      </figcaption>
    </figure>
 )

 }

 export default ArticleThumbnail
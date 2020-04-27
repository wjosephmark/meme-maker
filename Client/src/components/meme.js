import React from "react"

const Meme = props =>{

    const {id, text, image, favorite} = props.meme

    return(
        <div key={id} className="meme">
            <div className="img-wrapper">
                <img className="meme-img" src={image} alt="Funny Meme" />
</div>
                <p>{text}</p>


                {favorite ? (
                    <img 
                    src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Flibrary.kissclipart.com%2F20180830%2Ffuw%2Fkissclipart-twinkle-little-star-clip-art-clipart-twinkle-twin-0d72b7a5dc286d1e.jpg"
                    alt="star"
                    />
                ) : null}
                <button onClick={() =>  props.deleteMeme(id)}>DEL</button> 
                <button>EDIT</button> 
            </div>
    )
}

export default Meme
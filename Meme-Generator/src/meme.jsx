import './meme.css'
import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name]:value
            }
        })
    }


    const [allMemes, setAllMemes] = React.useState([])
     
   React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
   },[]) 

//nothing changing in state so no dependencies so empty array

//can also do by using async await
//    React.useEffect(async () => {
//     const res = await fetch("https://api.imgflip.com/get_memes")
//     const data = await res.json()
//     setAllMemes(data.data.memes)
// }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url 
        }))  
    //  const url = memesArray[randomNumber].url 
    //  Another method --> const {url} = memesArray[randomNumber]   ....pulling the url property
    //  console.log(url)
    }

    return(
        <div className="meme">

            <div className="form">
                <div className="row1">
                    <input
                       type="text"
                       className='form-input' 
                       placeholder='Top-Text'
                       name="topText"
                       value={meme.topText}
                       onChange={handleChange}
                    />

                    <input 
                       type="text" 
                       className='form-input' 
                       placeholder='Bottom-Text'
                       name="bottomText"
                       value={meme.bottomText}
                       onChange={handleChange}
                    /> 

                </div>     
                    {/* <button className="new-img" onClick={function() {}}>Generate New Image</button>   can do like this too */}
                    <button className="new-img" onClick={getMemeImage}>Generate New Image</button>  {/* dont put brackets to the function here coz it will run the function as soon as the program is run*/}
            </div>
            
            <div className="imgbox">
                 <img src={meme.randomImage} className="meme--image" />
                 
                 <h2 className="meme--text top">{meme.topText}</h2>
                 <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
            
        </div>
    ) 
}
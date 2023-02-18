
import {FaFileImage} from "react-icons/fa"
import memesData from "../memesData"
import {useState} from "react"

function Form(){

    const [memeImage, setMemeImg] = useState("")
    var urlImg

    function Meme(){
        var aleatorio = Math.floor(Math.random()*100)
        urlImg = memesData.data.memes[aleatorio].url
        setMemeImg(urlImg)
    }

    return(
        <section className="formContainer">
            <div>
                {/* <div className="inputForm">
                    <input type="text" id="firstLine"/>
                    <input type="text" id="secondLine"/>
                </div> */}
                <button onClick={Meme} type="submit" id="button">Get a new meme image<FaFileImage/></button>
            </div>
            <img id="imgMeme" src={memeImage} alt=""></img>
        </section>
    )
}

export default Form;
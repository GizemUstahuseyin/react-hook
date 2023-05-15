import { useState } from "react";

function Favorirenk(){
    const [renk, setRenk] = useState("red");

    return (
        <>
         <h1>Benim favori rengim : {renk}</h1>
        <button type="button" onClick={() => setRenk("blue")}>Mavi</button>
        </>
       
    );
}

export default Favorirenk;
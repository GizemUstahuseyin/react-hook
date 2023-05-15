import {useState} from "react";

function Araba(){
    const[marka,setMarka]=useState("Ford");
    const[model,setModel]=useState("mustang");
    const[yil,setYil]=useState("1964");
    const[renk,setRenk]=useState("kirmizi");

    const [araba,setAraba]=
    useState({
        marka:"Opel",
        model:"Vectra",
        yil:"1997",
        renk:"beyaz"
    })

    const renkDegistir = () =>{
        setAraba(previousState =>{
            return {...previousState, renk:"kırmızı"}
        })
    }

    return(
        <>
        <h1>Markam: {araba.marka} </h1>
        <p>Renk:{araba.renk},Model:{araba.model},Yıl:{araba.yil}</p>
        <button type="button" onClick={renkDegistir}>Kırmızı Yap</button>
        </>
        )

}
export default Araba;
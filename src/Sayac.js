import {useState} from "react";

function Sayac(){
    const  [sayi,setSayi]=useState(0);
    
    function arttir(){
        setSayi(sayi +1);
    }

    function azalt(){
        setSayi(sayi -1);
    }

    return(
        <>
        <h2>Sayaç:{sayi}</h2>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azalt</button>
        </>
    )
}
export default Sayac;
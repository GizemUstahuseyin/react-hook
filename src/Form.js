import { useState } from 'react';

function Form(){

    const [input, setInput] = useState('');

    const degistiginde = (event) =>{
        const input_name = event.target.name;
        const input_value = event.target.value;

        setInput(values => ({...values, [input_name]: input_value }))
    }

    const submitFonk = (event) =>{
        event.preventDefault();
        // alert(`Girdiğiniz isim: ${input}`); //özel tırnak
        console.log(input);
    }

    return(
        <>
        <form onSubmit={submitFonk}>
            <label>İsmini gir: </label>
            <input type="text" name="isim" value={input.isim || ""} onChange={degistiginde}/> 
            <label> Yasını gir: </label>
            <input type="number" name="yas" value={input.yas || ""} onChange={degistiginde} />
           
           <label>Başvurma Amacınız:</label>
           <textarea type="number" name="basvuru" value={input.basvuru || ""} onChange={degistiginde} />
           

           <label>Burs İsteği:</label>
           <select type="option" name="secenek" value={input.secenek || ""} onChange={degistiginde}>
            <option type="option" name="secenek" value={input.secenek || "1"} onChange={degistiginde}>Evet</option>
            <option type="option" name="secenek" value={input.secenek || "0"} onChange={degistiginde}>Hayır</option>
           </select>


            <input type="submit" />
            <br></br>
           
        </form>
        </>
    );
}

export default Form;

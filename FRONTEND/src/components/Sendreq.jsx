import { SendCMD } from "../helpers/Sendcmd";
import { useState } from 'react';
import '../css/Sendreq.css';
import cmdico from "../media/command-line.png";

function SendReq(props) {
    const [cmd, setCmd] = useState("")
    const [res, setRes] = useState("") //SetRes es una función que deposita un valor en la variable res.
    return(
        <div className="sendreq">
            <form className="formbox" onSubmit={(event) => {SendCMD(cmd, setRes); event.preventDefault(); setCmd("")}}> {/* event.preventDefault es para que no se recargue la pagina cada vez que sumbiteas */}
                <div className="cmdbox">
                    <div className="icon">
                        <img src={cmdico} alt="icono de cmd" className="cmdico" /> {/*EL ALT ES PARA QUE SE MUESTRE TEXTO SI NO SE CARGA LA IMAGEN*/}
                    </div>
                </div> 
                <input className="input" type="text" placeholder="Command" value={cmd} onChange = {(event) => {setCmd(event.target.value); console.log(event.target.value)}}/>
            </form>

        {/*OUTPUT DIVS*/}
            <div className="megadad">
                <div className="execpanel">
                    <div className="exectext">Exec:</div>
                    <div className="execcmd">{res.Command}</div>
                </div>
                
                <div className="outputpanel">
                    <div className="outputtext">Output:</div>      
                </div>
                <p className="output">{res.Output} {res.Error} </p>
            </div>
        </div>
    )
}

export default SendReq;


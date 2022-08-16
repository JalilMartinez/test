import {useEffect, useState} from 'react';

function Lista() {
    const url="https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const [info, setInfo] = useState();

    useEffect( () => {
        fetchApi()
    },[])

    const fetchApi = async () =>{
        const response = await fetch(url);
        const responseJSON = await response.json();
        setInfo(responseJSON.results);
        console.log(responseJSON);
    }

    return(
        <section>
            <h1>
                Climate
            </h1>
                <div className='contenedor contenedor-titulos'>
                <p>_id</p>
                <p>cityid</p>
                <p>name</p>
                <p>state</p>
                <p>probability of precip</p>
                <p>relative humidity</p>
                <p>Lastreport time</p>
                <p>rain </p>
                </div>
                <div>
                    {!info ?'cargando informacion...':
                        info.map((ids,index)=>{
                            return(
                                <div className='contenedor' key={index}>
                                    {/* <button> */}
                                    <p>{ids._id}</p>
                                    {/* </button> */}
                                    
                                </div>
                            )
                        })

                    }
                </div>
        </section>

    );
}

export default Lista;
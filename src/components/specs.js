import { useState } from 'react' 

const Specs = () => {

    const [cpu, setCpu] = useState("");
    const [gpu, setGpu] = useState("");
    const [ram, setRam] = useState("");
    const [ssd, setSsd] = useState("");
    const [psu, setPsu] = useState("");
    const [mobo, setMobo] = useState("");
    const [tower, setTower] = useState("");
    const [cooler, setCooler] = useState("");
    const [results, setResults] = useState(true);

    const submitOrder = (e) => {
        e.preventDefault();
        setResults(true);
        setCpu("");
        setGpu("");
        setMobo("");
        setCooler("");
        setPsu("");
        setRam("");
        setSsd("");
        setTower("");
    };

    return (
        <div>
        <div className='spec-card'>
            <label>CPU:</label>
            <input type = "text" value={cpu} onChange={ (e) => setCpu(e.target.value) }/> 
            <label>GPU:</label>
            <input type = "text" value={gpu} onChange={ (e) => setGpu(e.target.value) }/> 
            <label>RAM:</label>
            <input type = "text" value={ram} onChange={ (e) => setRam(e.target.value) }/> 
            <label>SSD:</label>
            <input type = "text" value={ssd} onChange={ (e) => setSsd(e.target.value) }/> 
            <label>Motherboard:</label>
            <input type = "text" value={mobo} onChange={ (e) => setMobo(e.target.value) }/> 
            <label>Power Supply:</label>
            <input type = "text" value={psu} onChange={ (e) => setPsu(e.target.value) }/> 
            <label>Case:</label>
            <input type = "text" value={tower} onChange={ (e) => setTower(e.target.value) }/> 
            <label>Cooler:</label>
            <input type = "text" value={cooler} onChange={ (e) => setCooler(e.target.value) }/>
            <input type="submit" id="button" onClick={submitOrder}></input>
        </div>
        <div id="results">
            <ol>
            <li>{cpu}</li>
            <li>{gpu}</li>
            <li>{ram}</li>
            <li>{ssd}</li>
            <li>{mobo}</li>
            <li>{psu}</li>
            <li>{tower}</li>
            <li>{cooler}</li>
            </ol>
        </div>
        </div>
    );
};

export default Specs;
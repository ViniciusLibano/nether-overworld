import styles from './FormCalc.module.scss'

export default function FormCalc({calcName, xValue, yValue, zValue, setXValue, setYValue, setZValue}) {
    
    let x = 'x' + String(calcName).toLowerCase()
    let y = 'y' + String(calcName).toLowerCase()
    let z = 'z' + String(calcName).toLowerCase()
    
    return (
        <div className={styles.FormCalc}>
            <h3>{String(calcName).toUpperCase()}</h3>
            <p>Coord. aproximadas</p>
            <div>
                <label htmlFor={x}>X</label>
                <input 
                    value={xValue} 
                    id={x} 
                    name={x} 
                    type="text" 
                    onChange={(e) => setXValue(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor={y}>Y</label>
                <input 
                    value={yValue} 
                    id={y} 
                    name={y} 
                    type="text" 
                    onChange={(e) => setYValue(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor={z}>Z</label>
                <input 
                    value={zValue} 
                    id={z} 
                    name={z} 
                    type="text" 
                    onChange={(e) => setZValue(e.target.value)}
                />
            </div>
        </div>
    )
}
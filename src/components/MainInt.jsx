import styles from './MainInt.module.scss'
import { useState } from 'react'

export default function MainInt() {
    const [xOwrd, setXOwrd] = useState()
    const [xNether, setXNether] = useState()
    const [yOwrd, setYOwrd] = useState()
    const [yNether, setYNether] = useState()
    const [zOwrd, setZOwrd] = useState()
    const [zNether, setZNether] = useState()


    //definindo o X
    const handleInputOwrdX = (e) => {
        setXOwrd(e.target.value)
        setXNether(toNether(e.target.value))
    }

    const handleInputNetherX = (e) => {
        setXNether(e.target.value)
        setXOwrd(toOverworld(e.target.value))
    }

    //definindo o Y
    const handleInputOwrdY = (e) => {
        setYOwrd(e.target.value)
        setYNether(toNether(e.target.value))
    }

    const handleInputNetherY = (e) => {
        setYNether(e.target.value)
        setYOwrd(toOverworld(e.target.value))
    }

    //definindo o Z
    const handleInputOwrdZ = (e) => {
        setZOwrd(e.target.value)
        setZNether(toNether(e.target.value))
    }

    const handleInputNetherZ = (e) => {
        setZNether(e.target.value)
        setZOwrd(toOverworld(e.target.value))
    }


    const toOverworld = (n) => {
        if (isNaN(n)) {
            n = 0
        }
        
        return Math.trunc(n*8)
    }

    const toNether = (n) => {
        if (isNaN(n)) {
            n = 0
        }

        return Math.trunc(n/8)
    }

    return (
        <div className={styles.MainInt}>
            <div className={styles.FormCalc}>
                <h3>Overworld</h3>
                <p>Coord. Aproximadas</p>
                <div>
                    <label htmlFor="xoverworld">X</label>
                    <input name="xoverworld" type="text" onChange={handleInputOwrdX} value={xOwrd} />
                </div>
                <div>
                    <label htmlFor="yoverworld">Y</label>
                    <input name="yoverworld" type="text" onChange={handleInputOwrdY} value={yOwrd} />
                </div>
                <div>
                    <label htmlFor="zoverworld">Z</label>
                    <input name="zoverworld" type="text" onChange={handleInputOwrdZ} value={zOwrd} />
                </div>
            </div>

            <div className={styles.FormCalc}>
                <h3>Nether</h3>
                <p>Coord. Aproximadas</p>
                <div>
                    <label htmlFor="xnether">X</label>
                    <input name="xnether" type="text" onChange={handleInputNetherX} value={xNether} />
                </div>
                <div>
                    <label htmlFor="ynether">Y</label>
                    <input name="ynether" type="text" onChange={handleInputNetherY} value={yNether} />
                </div>
                <div>
                    <label htmlFor="znether">Z</label>
                    <input name="znether" type="text" onChange={handleInputNetherZ} value={zNether} />
                </div>
            </div>
        </div>
    )
}
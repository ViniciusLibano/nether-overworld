import FormCalc from './FormCalc'
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
            <FormCalc 
                calcName='overworld' 
                xValue={xOwrd} 
                yValue={yOwrd} 
                zValue={zOwrd} 
                setXValue={handleInputOwrdX}
                setYValue={handleInputOwrdY}
                setZValue={handleInputOwrdZ}
            />
            <FormCalc 
                calcName='nether' 
                xValue={xNether} 
                yValue={yNether} 
                zValue={zNether} 
                setXValue={handleInputNetherX}
                setYValue={handleInputNetherY}
                setZValue={handleInputNetherZ}
            />
        </div>
    )
}
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

        return Math.trunc(0/8)
    }

    return (
        <div className={styles.MainInt}>
            <FormCalc calcName='overworld' xValue={toOverworld(xNether)} yValue={toOverworld(yNether)} zValue={toOverworld(zNether)}/>
            <FormCalc calcName='nether' setXValue={setXNether} setYValue={setYNether} setZValue={setZNether}/>
        </div>
    )
}
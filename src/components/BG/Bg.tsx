'use client'

import styles from './Bg.module.css'
import Pool from "../Pool/Pool"
import Timer from '../Timer/Timer'
import Image from 'next/image'
import Link from 'next/link'

export default function Bg() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.poolData}>
                    <Pool />
                    <Timer />
                    <Link href="/about">
                        <Image className={styles.gamePadImage} src="/gamepad.svg" alt="game-pad" height={100} width={100} />
                    </Link>
                </div>
            </div>
        </>
    )
}
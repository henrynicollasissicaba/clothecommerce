"use client"

import { useEffect, useState } from "react"
import { FaRegClock } from "react-icons/fa6";

export default function TimingOut(){
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24h = 86400s

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if(prevTime <= 1){
                    clearInterval(timer)
                    return 0
                }

                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        return `${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`
    }

    return(
        <section className="mt-16 bg-gray-200 py-4 px-2 flex flex-col gap-6 items-center text-center">
            <h3 className="text-xl font-medium text-gray-800">Tempo restante para garantir o desconto:</h3>
            <span className="flex items-center gap-4 text-4xl font-bold text-emerald">
                <FaRegClock />
                {formatTime(timeLeft)}
            </span>
        </section>
    )
}
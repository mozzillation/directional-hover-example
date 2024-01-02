'use client'

import { motion, useAnimate, useSpring } from 'framer-motion'
import { PointerEvent, useEffect, useRef, useState } from 'react'

type CardType = {
	title: string
}

const Card: React.FC<CardType> = ({ title }) => {
	const [isBooped, setIsBooped] = useState<boolean>(false)

	const cardRef = useRef<HTMLDivElement>(null)

	const mouse = useRef({ x: 0, y: 0 }).current
	const target = useRef({ x: 0, y: 0 }).current

	const timing = 250

	const springConfig = {
		stiffness: 300,
		mass: 0.9,
	}

	const x = useSpring(0, springConfig)
	const y = useSpring(0, springConfig)
	const scale = useSpring(1, springConfig)

	const onMouseMove = (event: PointerEvent<HTMLDivElement>) => {
		mouse.x = event.clientX
		mouse.y = event.clientY
	}

	useEffect(() => {
		const resetValues = () => {
			x.set(0)
			y.set(0)
			scale.set(1)
		}

		if (!isBooped) {
			resetValues()
			return
		}

		const timeoutId = window.setTimeout(() => {
			setIsBooped(false)
		}, timing)

		return () => {
			window.clearTimeout(timeoutId)
		}
	}, [isBooped, timing, x, y, scale])

	const handleHoverAnimation = () => {
		if (!cardRef.current) return

		const { height, width, left, top } =
			cardRef.current.getBoundingClientRect()

		const cardCenterPosition = {
			x: width / 2 + left,
			y: height / 2 + top,
		}

		const distanceX = mouse.x - cardCenterPosition.x
		const distanceY = mouse.y - cardCenterPosition.y

		x.set(-(distanceX * 0.05))
		y.set(-(distanceY * 0.05))
		scale.set(1.02)

		setIsBooped(true)
	}

	return (
		<motion.article
			ref={cardRef}
			className={`aspect-[3/4] max-w-96 rounded-2xl bg-white border-2 border-violet-100 p-8 w-full relative shadow-xl shadow-purple-400/5`}
			onHoverStart={handleHoverAnimation}
			onPointerMove={onMouseMove}
			style={{ x, y, scale }}
		>
			<h1 className={`text-4xl font-bold`}>{title}</h1>
		</motion.article>
	)
}

export default Card

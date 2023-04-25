import React, { FC } from 'react'

interface ICardProps {
	title: string
	description: string
}

const Card: FC<ICardProps> = ({ title, description }) => {
	return (
		<section className='flex flex-col items-center text-center gap-4 py-5 px-8 bg-light rounded-xl border-transparent border-1 hover:border-primary hover:scale-105 hover:shadow-primary transition-all box-border'>
			<p className='text-3xl font-bold'>{title}</p>
			<p className='font-medium whitespace-pre-line'>{description}</p>
		</section>
	)
}

export default Card

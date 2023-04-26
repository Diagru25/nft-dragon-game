import React, { FC } from 'react'

const Section: FC<{ title: string; children: React.ReactNode }> = ({
	title,
	children,
}) => {
	return (
		<section className='flex flex-col justify-center items-center'>
			<p className='text-5xl text-primary pb-10 font-black text-center'>
				{title}
			</p>
			{children}
		</section>
	)
}

export default Section

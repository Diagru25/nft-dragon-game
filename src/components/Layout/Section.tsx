import React, { FC } from 'react'

const Section: FC<{ title: string; children: React.ReactNode }> = ({
	title,
	children,
}) => {
	return (
		<section className=''>
			<h1>{title}</h1>
			{children}
		</section>
	)
}

export default Section

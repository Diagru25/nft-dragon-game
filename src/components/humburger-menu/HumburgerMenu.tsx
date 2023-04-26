import Link from 'next/link'
import React from 'react'
interface INavLink {
	label: string
	value: string
}
const HumburgerMenu = () => {
	const navLinks: Array<INavLink> = [
		{
			label: 'Home',
			value: '',
		},

		{
			label: 'AirDrop',
			value: 'airdrop',
		},

		{
			label: 'Perks',
			value: 'perks',
		},

		{
			label: 'Staking',
			value: 'staking',
		},

		{
			label: 'Tokenomics',
			value: 'tokenomics',
		},

		{
			label: 'Roadmap',
			value: 'roadmap',
		},
	]
	return (
		<div className='absolute z-20 flex flex-col gap-2 py-2 px-1 w-full bg-light font-semibold'>
			{navLinks.map((link, id) => (
				<Link key={id} href={`#${link.value}`} className={`p-2`}>
					{link.label}
				</Link>
			))}
		</div>
	)
}

export default HumburgerMenu

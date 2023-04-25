import Image from 'next/image'
import img from '@/assets/chicken.png'
import ButtonConnectWallet from '../button-connect-wallet/ButtonConnectWallet'
import Link from 'next/link'

interface IHeader {
	label: string
	value: string
}

function Header() {
	const headers: Array<IHeader> = [
		{
			label: 'Home',
			value: 'home',
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
		<section className='sticky top-0 left-0 w-full items-center py-2 bg-light z-50 shadow-primary-light'>
			<section className='flex container mx-auto justify-between'>
				<div>
					<Image src={img} alt='img' width={60} height={60} />
				</div>
				<div className='flex items-center gap-8 pr-4'>
					<nav className='flex items-center gap-3'>
						{headers.map((header) => (
							<Link
								key={header.value}
								href={`#${header.value}`}
								className='px-3 py-1 font-semibold transition duration-300 box-border border-transparent rounded-lg border hover:text-primary  hover:border-gray'
							>
								{header.label}
							</Link>
						))}
					</nav>
					<ButtonConnectWallet />
				</div>
			</section>
		</section>
	)
}

export default Header

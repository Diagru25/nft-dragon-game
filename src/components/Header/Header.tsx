import Link from 'next/link'
import Image from 'next/image'
import img from '@/assets/chicken.png'
import ButtonConnectWallet from '../button-connect-wallet/ButtonConnectWallet'
import { Fragment } from 'react'
import MenuIcon from '../icon/Menu'
import HumburgerMenu from '../humburger-menu/HumburgerMenu'
import useToggle from '@/hooks/useToggle'
import CloseIcon from '../icon/Close'

interface INavLink {
	label: string
	value: string
}

function Header() {
	const [toggleMenu, setToggleMenu] = useToggle(false)
	const navLinks: Array<INavLink> = [
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

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<Fragment>
			<section className='sm:hidden sticky top-0 left-0 w-full items-center py-2 bg-light z-50 shadow-primary-light'>
				<section className='flex container mx-auto justify-between'>
					<div>
						<Image src={img} alt='img' width={60} height={60} />
					</div>
					<div className='flex items-center gap-8 pr-4'>
						<nav className='flex items-center gap-3'>
							{navLinks.map((link) => (
								<Link
									key={link.value}
									href={`#${link.value}`}
									className={`px-3 py-1 font-semibold transition duration-300 box-border border-transparent rounded-lg border hover:text-primary hover:border-gray`}
								>
									{link.label}
								</Link>
							))}
						</nav>
						<ButtonConnectWallet />
					</div>
				</section>
			</section>

			<div className='sm:block hidden fixed w-screen top-0 left-0 z-50'>
				{toggleMenu && <div className='overlay' />}

				<div className='flex justify-between sticky w-full items-center py-2 bg-light z-50 shadow-primary-light px-5'>
					<Image src={img} alt='img' width={60} height={60} />
					<button onClick={handleToggleMenu}>
						{toggleMenu ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
				{toggleMenu && <HumburgerMenu />}
			</div>
		</Fragment>
	)
}

export default Header

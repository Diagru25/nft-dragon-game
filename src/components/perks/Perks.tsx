import Card from '../common/Card'

export default function PerksSection() {
	const perks: Array<{ title: string; description: string }> = [
		{
			title: 'OwnerShip',
			description: `By owning one of our 48000 AiShiba OG Collection, you automatically become an early member of AiShiba army.
\nAll NFT holders are eligible for our upcoming airdrop and future events.`,
		},

		{
			title: 'OwnerShip',
			description: `By owning one of our 48000 AiShiba OG Collection, you automatically become an early member of AiShiba army.
\nAll NFT holders are eligible for our upcoming airdrop and future events.`,
		},

		{
			title: 'OwnerShip',
			description: `By owning one of our 48000 AiShiba OG Collection, you automatically become an early member of AiShiba army.
\nAll NFT holders are eligible for our upcoming airdrop and future events.`,
		},

		{
			title: 'OwnerShip',
			description: `5% of all the funds accumulated from sell-off transaction fees gets distributed to all HOLDRs, including you. So relax, do nothing but HOLD and watch your balance increase on its own due to Red Floki CEO rewards.`,
		},
	]
	return (
		<section className='w-full bg-primary-light py-10'>
			<div className='flex flex-col items-center container mx-auto  '>
				<p className='text-5xl text-primary pb-10 font-black'>Perks</p>
				<div className='flex flex-wrap gap-5 justify-center items-center'>
					{perks.map((perk) => (
						<div key={perk.title} className='sm:w-full w-2/5'>
							<Card title={perk.title} description={perk.description}></Card>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

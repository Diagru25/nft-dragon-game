import Card from '../common/Card'
import Section from '../common/Section'

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
		<section className='w-full bg-primary-light py-10 px-5'>
			<div className='flex flex-col items-center container mx-auto'>
				<Section title='Perk'>
					<div className='grid sm:grid-rows-1 sm:grid-cols-1 grid-rows-2 grid-cols-2 gap-4'>
						{perks.map((perk, index) => (
							<Card
								key={index}
								title={perk.title}
								description={perk.description}
							></Card>
						))}
					</div>
				</Section>
			</div>
		</section>
	)
}

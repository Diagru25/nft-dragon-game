import { Inter, Chakra_Petch } from 'next/font/google'
import SpaceDiv from '@/components/space-div/SpaceDiv'
import Banner from '@/components/banner/Banner'
import FormSection from '@/components/form-section/FormSection'
import PerksSection from '@/components/perks/Perks'
import TokenomicsSection from '@/components/tokenomics-section/TokenomicsSection'
import RoadmapSection from '@/components/roadmap-section/RoadmapSection'

//const inter = Chakra_Petch({ subsets: ["latin"], weight: "400" });

export default function Home() {
	return (
		<main
		//className={`${inter.className}`}
		>
			<Banner />
			<FormSection />
			<PerksSection />
			<TokenomicsSection />
			<RoadmapSection />
		</main>
	)
}

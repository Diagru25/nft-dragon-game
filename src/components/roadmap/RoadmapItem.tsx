export default function RoadmapItem({ contents = [], title }: any) {
	return (
		<div className='flex flex-col gap-4 py-5 px-8 bg-light rounded-xl border-transparent border-1'>
			<h2 className='text-2xl font-bold'>{title}</h2>
			<ul className='flex flex-col gap-2'>
				{contents.map((item: any, index: number) => (
					<li key={index}>
						<span className='pr-2 text-xl'>&#x2022;</span> {item}
					</li>
				))}
			</ul>
		</div>
	)
}

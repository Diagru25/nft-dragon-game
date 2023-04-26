export default function InputLabel({ value = '', onChange, ...rest }: any) {
	return (
		<div className='relative w-full rounded-md '>
			<label
				htmlFor='price'
				className='block absolute text-sm font-bold -top-4 left-2 px-1.5 z-20'
			>
				Your Airdrop Allocation
			</label>
			{/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">$</span>
      </div> */}
			<input
				style={{ fontSize: '1.125rem' }}
				type='text'
				id='price'
				className='block w-full rounded-md py-4 px-7 text-gray-900 placeholder:text-gray-400 sm:text-sm text-lg outline outline-gray '
				placeholder='0.00'
				value={value}
				onChange={onChange}
				{...rest}
			/>
		</div>
	)
}

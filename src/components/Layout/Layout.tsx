import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { Fragment } from 'react'

export default function Layout(props: any) {
	return (
		<Fragment>
			<Header />
			<Fragment>{props.children}</Fragment>
			<Footer />
		</Fragment>
	)
}

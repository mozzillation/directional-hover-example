import Card from '@/components/card'
import Wrapper from '@/components/container'

const Home = () => {
	return (
		<Wrapper>
			<Card
				title={`Do more with NFTs — pin, hide, burn, and list.`}
			/>
			<Card title={`Swap tokens super fast and at low fees.`} />
			<Card
				title={`Store, stake, and earn rewards with your tokens.`}
			/>
		</Wrapper>
	)
}

export default Home

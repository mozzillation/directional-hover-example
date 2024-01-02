'use client'

type WrapperType = {
	children: React.ReactNode
}

const Wrapper: React.FC<WrapperType> = ({ children }) => {
	return (
		<div
			className={`min-h-screen flex flex-wrap flex-row gap-4 items-center content-center justify-center p-4`}
		>
			{children}
		</div>
	)
}

export default Wrapper


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<div>Template</div>
			<div className='p-4 border-2 border-gray-500'>
				{children}
			</div>
		</div>
	)
}

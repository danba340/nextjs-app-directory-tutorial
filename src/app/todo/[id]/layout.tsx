import Link from 'next/link'


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<p>Todo Layout</p>
			<div className='flex gap-2'>
				<Link href="/todo/1" >Todo 1</Link>
				<Link href="/todo/2" >Todo 2</Link>
			</div>
			<div className='p-4 border-2 border-gray-500'>
				{children}
			</div>
		</div>
	)
}

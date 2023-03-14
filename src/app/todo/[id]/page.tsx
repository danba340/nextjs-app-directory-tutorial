import styles from '../../page.module.css'
import { notFound } from "next/navigation"
import BuggyButton from './BuggyButton';

// export const runtime = 'experimental-edge';

export async function generateStaticParams() {
	// Generate two pages at build time and the rest (3-100) on-demand
	return [{ id: '1' }, { id: '2' }];
}

function wait(secs: number) {
	return new Promise(resolve => {
		setTimeout(() => { resolve("done") }, secs * 1000)
	})
}

async function getTodo(id: string) {
	try {
		const res = await fetch("http://localhost:3000/data?id=" + id)
		const data = await res.json()
		await wait(1);
		return data
	} catch (e) {
		return {}
	}
}

export default async function Todo({ params }: { params: { id: string } }) {
	const todo = await getTodo(params.id)
	return (
		<main className={styles.main}>
			<div className='flex flex-col gap-2'>
				<p className='text-xl'>{todo.title}</p>
				<p>{todo.description}</p>
				<BuggyButton />
			</div>
		</main>
	)
}

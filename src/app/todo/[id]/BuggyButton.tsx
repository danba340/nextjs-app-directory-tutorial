'use client';

import React from 'react';

export default function BuggyButton() {
	const [clicked, setClicked] = React.useState(false);

	if (clicked) {
		throw new Error('Buggy button caused 🪲');
	}

	return (
		<button
			className='rounded border-2 p-2'
			onClick={() => {
				setClicked(true);
			}}
		>
			Trigger Error
		</button>
	);
}
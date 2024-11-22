// Contexto para a mídia query
'use client';

import { MediaQueryProvider } from '@/components/contextApp';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { useState } from 'react';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<MediaQueryProvider>
			<div className="overflow-hidden">
				<Navbar toggleSidebar={toggleSidebar} />
				<Sidebar isOpen={isOpen} />
			</div>
		</MediaQueryProvider>
	);
}

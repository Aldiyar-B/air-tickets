import React, { useState } from 'react';
import { tickets as initialTickets } from '../data/data'; // Сохраняем изначальные билеты
import TicketItem from './ticketItem';
import Button from '@mui/material/Button';

const TicketList = () => {
	const [sortedTickets, setSortedTickets] = useState(initialTickets);
	const [sortBy, setSortBy] = useState(null);


	const sortByPrice = () => {
		//создание массива sorted, т.к sort изменяет массив на месте
		const sorted = [...sortedTickets].sort((a, b) => a.price - b.price);
		setSortedTickets(sorted);
		setSortBy('price');
	}

	const sortInitialOrder = () => {
		setSortedTickets(initialTickets);
		setSortBy(null);
	}

	const sortBySpeed = () => {
		const sorted = [...sortedTickets].sort((a, b) => a.flight_duration_hours - b.flight_duration_hours)
		setSortedTickets(sorted);
		setSortBy('speed')
	}

	// if (sortBy === null) {
	// 	sortInitialOrder();
	// }

	return (
		<div className='container'>
			<div className='buttons'>
				<Button onClick={sortByPrice}>Самый дешевый</Button>
				<Button onClick={sortInitialOrder}>Исходный порядок</Button>
				<Button onClick={sortBySpeed}>Самый быстрый</Button>
			</div>
			<div>
				{sortedTickets.map(ticket => (
					<TicketItem key={ticket.ID} ticket={ticket} />
				))}
			</div>
		</div>
	);
};

export default TicketList;

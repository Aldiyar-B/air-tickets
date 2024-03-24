import React from 'react';
import { tickets } from '../data/data';
import TicketItem from './ticketItem';

const TicketList = () => {
	console.log(tickets)

	return (
		<div>
			{tickets.map(ticket => (
				<TicketItem ticket={ticket} />
			))}
		</div>
	);
};

export default TicketList;

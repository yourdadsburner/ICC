import { PrismaClient } from '@prisma/client';
import { venues, teams, matches, ticketTypes, tariffs, matchTickets } from './app/lib/placeholder-data.mjs';

const prisma = new PrismaClient();

async function main() {
  // Seed Venues
  for (const venue of venues) {
    await prisma.venue.create({
      data: venue,
    });
  }

  // Seed Teams
  for (const team of teams) {
    await prisma.team.create({
      data: team,
    });
  }

  // Seed TicketTypes
  for (const ticketType of ticketTypes) {
    await prisma.ticketType.create({
      data: ticketType,
    });
  }

  // Seed Tariffs
  for (const tariff of tariffs) {
    await prisma.tariff.create({
      data: tariff,
    });
  }

  // Seed Matches
  for (const match of matches) {
    await prisma.match.create({
      data: match,
    });
  }

  // Seed MatchTickets
  for (const matchTicket of matchTickets) {
    await prisma.matchTicket.create({
      data: matchTicket,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchMatches() {
  try {
    const matches = await prisma.match.findMany({
      select: {
        id: true,
        matchNameCompact: true,
        dateShort: true,
        time: true,
        venue: {
          select: {
            name: true,
          },
        },
        team1: {
          select: {
            name: true,
            flagIcon: true,
          },
        },
        team2: {
          select: {
            name: true,
            flagIcon: true,
          },
        },
      },
      orderBy: {
        dateShort: 'asc',
      },
    });

    return matches;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
}

export async function fetchMatch(matchId: string) {
  try {
    const match = await prisma.match.findUnique({
      where: {
        id: matchId,
      },
      include: {
        venue: true,
        team1: true,
        team2: true,
      },
    });

    return match;
  } catch (error) {
    console.error('Error fetching match:', error);
    throw error;
  }
}

export async function fetchMatchTickets(matchId: string) {
  try {
    const matchTickets = await prisma.matchTicket.findMany({
      where: {
        matchId: matchId,
      },
      include: {
        ticketType: true,
        tariff: true,
      },
    });

    return matchTickets;
  } catch (error) {
    console.error('Error fetching match tickets:', error);
    throw error;
  }
}
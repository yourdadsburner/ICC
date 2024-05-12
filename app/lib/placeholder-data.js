import { v4 as uuidv4 } from 'uuid';

const venues = [
    {
        "id": uuidv4(),
        "name":"Arnos Vale Stadium, Saint Vincent and The Grenadines",
        "stadiumPhotoSmall": "",
        "stadiumPhotoLarge":"",
    },
    {
        "id": uuidv4(),
        "name":"Brian Lara Cricket Academy, Trinidad and Tobago",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/4eab06c8-2146-41b6-bd50-f2808d4a609a.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/4eab06c8-2146-41b6-bd50-f2808d4a609a.jpg",    
    },
    {
        "id": uuidv4(),
        "name":"Broward County Stadium, Lauderhill, Florida",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/d815ee9e-ed48-41f9-8417-1ee89f6fcf86.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/d815ee9e-ed48-41f9-8417-1ee89f6fcf86.jpg",    
    },
    {
        "id": uuidv4(),
        "name":"Daren Sammy Cricket Ground, Saint Lucia",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/1d9cac75-bc87-4d0e-ab2f-93c6b2214f8b.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/1d9cac75-bc87-4d0e-ab2f-93c6b2214f8b.jpg",    
    },
    {
        "id": uuidv4(),
        "name": "Grand Prairie Cricket Stadium, Dallas, Texas",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/f1031f24-01c1-4da7-81bc-0ae03e13d35f.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/f1031f24-01c1-4da7-81bc-0ae03e13d35f.jpg",    
    },
    {
        "id": uuidv4(),
        "name":"Guyana National Stadium, Guyana",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/7d6cde96-6e96-4670-97e2-7c4eb3108227.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/7d6cde96-6e96-4670-97e2-7c4eb3108227.jpg",    
    },
    {
        "id": uuidv4(),
        "name":"Kensington Oval, Barbados",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/b471ef19-b451-429b-9082-6c5cf29ef697.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/b471ef19-b451-429b-9082-6c5cf29ef697.jpg", 
    },
    {
        "id": uuidv4(),
        "name":"Nassau County International Cricket Stadium, New York",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/6e428b7b-2505-492b-b384-ae64dba07233.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/6e428b7b-2505-492b-b384-ae64dba07233.jpg",    
    },
    {
        "id": uuidv4(),
        "name":"Sir Vivian Richards Stadium, Antigua and Barbuda",
        "stadiumPhotoSmall": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/med/b8f48a17-d3cf-4ce8-835f-5d01b2884543.jpg",
        "stadiumPhotoLarge":"https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/venue/large/b8f48a17-d3cf-4ce8-835f-5d01b2884543.jpg",
    },
];

const teams = [
    {
        "id": uuidv4(),
        "name": "A1",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "A2",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "AFGHANISTAN",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/536fac4a-fd6f-4337-828f-e72daf3d6b90.jpg",
    },
    {
        "id": uuidv4(),
        "name": "AUSTRALIA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/734055fd-1021-4be8-9e26-3871965f37ae.jpg",
    },
    {
        "id": uuidv4(),
        "name": "B1",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "B2",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "BANGLADESH",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/da8f464a-14c9-4a64-9e56-0e9a7d1f8944.jpg",
    },
    {
        "id": uuidv4(),
        "name": "C1",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },    
    {
        "id": uuidv4(),
        "name": "C2",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "CANADA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/bb119caa-b180-445d-b828-5a5ebf7d9c42.jpg",
    },
    {
        "id": uuidv4(),
        "name": "D1",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "D2",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "ENGLAND",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/1802580e-f240-42ed-bf3d-8ea7d6648ed5.png",
    },
    {
        "id": uuidv4(),
        "name": "INDIA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/9e8f4537-e4dd-4148-98e9-7b0aecee3f96.jpg",
    },
    {
        "id": uuidv4(),
        "name": "IRELAND",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/143b3a61-ca3c-4d1b-93fc-bd961a5fee28.jpg",
    },
    {
        "id": uuidv4(),
        "name": "NAMIBIA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/1c50d0fc-d8a3-4512-b800-589e80f90d7e.jpg",
    },
    {
        "id": uuidv4(),
        "name": "NEPAL",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/15ffa4fd-012c-4a88-94a6-c87663b677ec.jpg",
    },
    {
        "id": uuidv4(),
        "name": "NETHERLANDS",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/1fbe2184-b052-4f10-a1eb-729919db8199.jpg",
    },
    {
        "id": uuidv4(),
        "name": "NEW ZEALAND",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/2b7bc655-ccc4-49f0-80db-b5e4cb63020a.jpg",
    },
    {
        "id": uuidv4(),
        "name": "OMAN",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/14f51d85-433a-4fd4-a2c8-5e5c03b4a2a9.jpg",
    },
    {
        "id": uuidv4(),
        "name": "PAKISTAN",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/ac0f8164-5e0c-4bb4-80c5-c75619debafa.png",
    },
    {
        "id": uuidv4(),
        "name": "PAPUA NEW GUINEA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/1c50d0fc-d8a3-4512-b800-589e80f90d7e.jpg",
    },
    {
        "id": uuidv4(),
        "name": "SCOTLAND",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/53d4f825-73f7-4b3d-a292-b59c7af2c199.jpg",
    },
    {
        "id": uuidv4(),
        "name": "SOUTH AFRICA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/4d95c1b2-ccee-47c8-9214-bd586b50a7cd.jpg",
    },
    {
        "id": uuidv4(),
        "name": "SRI LANKA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/88843b85-8779-4ef5-9241-66d57a27fd64.jpg",
    },
    {
        "id": uuidv4(),
        "name": "TBC",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/b089420e-4cf0-49f6-aefc-47181a3fa7ec.png",
    },
    {
        "id": uuidv4(),
        "name": "UGANDA",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/d90de34e-3c29-4463-8e6d-9f319a36a937.jpg",
    },
    {
        "id": uuidv4(),
        "name": "UNITED STATES",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/486118f9-a1f2-460b-8bc2-1be42e244d4c.jpg",
    },
    {
        "id": uuidv4(),
        "name": "WEST INDIES",
        "flagIcon": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/team/med/22f18fe4-2f1d-4508-a0c8-ec2b4ad50513.png"
    },
]

const matches = [
    {
        "id": uuidv4(),
        "team1Id": teams[27].id,
        "team2Id": teams[9].id,
        "matchNameCompact": "UNITED STATES v CANADA",
        "matchNameFull": "ICC MEN'S T20 WORLD CUP - WEST INDIES & USA 2024 MATCH 01 - GROUP STAGE - GROUP A",
        "dateFull": "Saturday, 1 June 2024",
        "dateShort": "Sat 1 Jun",
        "time": "19:30",
        "venueId": venues[4].id,
        "onSale": true,
        "startingPrice": "$40.00",
        "photoUrl": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/catalog/performance/large/a3a5e878-55e6-4b58-a645-685365c1a000.jpg",
      },
      {
        "id": uuidv4(),
        "team1Id": teams[28].id,
        "team2Id": teams[21].id,
        "matchNameCompact": "WEST INDIES v PAPUA NEW GUINEA",
        "matchNameFull": "ICC MEN'S T20 WORLD CUP - WEST INDIES & USA 2024 MATCH 02 - GROUP STAGE - GROUP C",
        "dateFull": "Sunday, 2 June 2024",
        "dateShort": "Sun 2 Jun",
        "time": "10:30",
        "venueId": venues[5].id,
        "onSale": true,
        "startingPrice": "$22.00",
        "photoUrl": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/catalog/performance/large/d63d4b9c-e12a-4a32-9e47-d3a8cad5131f.jpg",
      },
      {
        "id": uuidv4(),
        "team1Id": teams[15].id,
        "team2Id": teams[19].id,
        "matchNameCompact": "NAMIBIA v OMAN",
        "matchNameFull": "ICC MEN'S T20 WORLD CUP - WEST INDIES & USA 2024 MATCH 03 - GROUP STAGE - GROUP B",
        "dateFull": "Sunday, 2 June 2024",
        "dateShort": "Sun 2 Jun",
        "time": "20:30",
        "venueId": venues[6].id,
        "onSale": true,
        "startingPrice": "$17.00",
        "photoUrl": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/catalog/performance/large/40e062ba-974f-4c22-b13d-1be6763fe0c8.jpg",
      },
      {
        "id": uuidv4(),
        "team1Id": teams[4].id,
        "team2Id": teams[5].id,
        "matchNameCompact": "SRI LANKA v SOUTH AFRICA",
        "matchNameFull": "ICC MEN'S T20 WORLD CUP - WEST INDIES & USA 2024 MATCH 04 - GROUP STAGE - GROUP D",
        "dateFull": "Monday, 3 June 2024",
        "dateShort": "Mon 3 Jun",
        "time": "10:30",
        "venueId": venues[7].id,
        "onSale": true,
        "startingPrice": "$70.00",
        "photoUrl": "https://s3.us-east-1.amazonaws.com/pub.t20inc.p52-s3.secutix.com/images/catalog/performance/large/4becf441-4e05-4301-81ee-024bd47753b9.jpg",
      },
]

const ticketTypes = [
    {
      "id": uuidv4(),
      "name": "Grass & Mound"
    },
    {
      "id": uuidv4(),
      "name": "Standard"
    },
    {
      "id": uuidv4(),
      "name": "Standard Plus"
    },
    {
      "id": uuidv4(),
      "name": "Premium"
    },
    {
      "id": uuidv4(),
      "name": "The Club - Open Air"
    },
    {
      "id": uuidv4(),
      "name": "The Club - Indoor"
    },
    {
        "id": uuidv4(),
        "name": "Party Stand"
    },
    {
        "id": uuidv4(),
        "name": "The Club - Indoore Lounge"
    }
  ]

const tariffs = [
    {
      "id": uuidv4(),
      "name": "Full Price",
      "saleType": "General Sale"
    },
    {
        "id": uuidv4(),
        "name": "Includes alcoholic & non-alcoholic beverages",
        "saleType": "General Sale"
    }
  ]  

const matchTickets = [
    {
      "id": uuidv4(),
      "matchId": matches[0].id,
      "ticketTypeId": ticketTypes[2].id,
      "tariffId": tariffs[0].id,
      "price": "$125.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[0].id,
        "ticketTypeId": ticketTypes[3].id,
        "tariffId": tariffs[0].id,
        "price": "$200.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[1].id,
        "ticketTypeId": ticketTypes[0].id,
        "tariffId": tariffs[0].id,
        "price": "$22.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[1].id,
        "ticketTypeId": ticketTypes[1].id,
        "tariffId": tariffs[0].id,
        "price": "$45.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[1].id,
        "ticketTypeId": ticketTypes[2].id,
        "tariffId": tariffs[0].id,
        "price": "$85.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[1].id,
        "ticketTypeId": ticketTypes[3].id,
        "tariffId": tariffs[0].id,
        "price": "$135.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[1].id,
        "ticketTypeId": ticketTypes[6].id,
        "tariffId": tariffs[0].id,
        "price": "$150.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[2].id,
        "ticketTypeId": ticketTypes[0].id,
        "tariffId": tariffs[0].id,
        "price": "$17.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[2].id,
        "ticketTypeId": ticketTypes[1].id,
        "tariffId": tariffs[0].id,
        "price": "$17.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[2].id,
        "ticketTypeId": ticketTypes[2].id,
        "tariffId": tariffs[0].id,
        "price": "$17.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[2].id,
        "ticketTypeId": ticketTypes[6].id,
        "tariffId": tariffs[0].id,
        "price": "$100.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[2].id,
        "ticketTypeId": ticketTypes[7].id,
        "tariffId": tariffs[0].id,
        "price": "$400.00"
    },
    {
        "id": uuidv4(),
        "matchId": matches[3].id,
        "ticketTypeId": ticketTypes[2].id,
        "tariffId": tariffs[0].id,
        "price": "$200.00"
    }
]

module.exports = {
    venues,
    teams,
    matches,
    ticketTypes,
    tariffs,
    matchTickets
};
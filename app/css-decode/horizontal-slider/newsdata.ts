const NEWS: News[] = [
  {
    title: "China's premier to visit Australia as Canberra pushes to lift trade barriers",
    category: 'China/Diplomacy',
    img: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/03/20/0dd0bb20-166c-4f7b-9a8c-ed9447e1e6eb_694743a2.jpg?itok=r3CmLk5U&v=1710926931',
    date: '6:00pm, 20 Mar 2024',
  },
  {
    title:
      "Profile | 'I'm influencing the French aesthetic': Violette_FR founder Violette Serrat on bucking trends and how make-up is like 'dressing up' for your face",
    category: 'Lifestyle/Fashion & Beauty',
    img: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/03/13/53ef0024-7cc2-4d1a-ba26-e46933da0b68_9c9c372c.jpg?itok=j6cQVmeR&v=1710313067',
    date: '9:18am, 20 Mar 2024',
  },
  {
    title:
      "China's relaxed entry rules bring more travel, but would-be tourists wary of remaining barriers",
    category: 'Economy/Global Economy',
    img: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/03/19/a869a3ee-ea3a-427f-8a39-cb900047ec2d_ee220f9e.jpg?itok=GdbNEv_Y&v=1710838811',
    date: '6:00am, 20 Mar 2024',
  },
  {
    title:
      "Viral Pat McGrath make-up for Martin Margiela haute couture show proves 'clean girl' look is on the out",
    category: 'Lifestyle/Fashion & Beauty',
    img: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/03/20/d4676999-b8e5-406f-84af-4c9920af0355_cbe9676d.jpg?itok=W3RmKKDy&v=1710903624',
    date: '7:15pm, 20 Mar 2024',
  },
  {
    title: 'EU united in unease over possible Trump win, but few agree on future path',
    category: 'China/Diplomacy',
    img: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/03/20/3695d1fd-2fcb-45e0-b39b-174a15792612_d5cad413.jpg?itok=bu8DONyc&v=1710877998',
    date: '3:00pm, 20 Mar 2024',
  },
  {
    title:
      'Asian Games 2023: Siobhan Haughey wins first swimming gold as Hong Kong claims seven more medals – day 2, as it happened',
    category: 'Sport/Hong Kong',
    img: 'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2023/09/25/0fb2328f-bf88-4641-90e3-e69526379345_27b4d096.jpg?itok=pCm6H6Uv&v=1695647646',
    date: '10:07pm, 25 Sep 2023',
  },
]

export type News = {
  title: string
  category: string
  date: string
  img: string
}

export default NEWS

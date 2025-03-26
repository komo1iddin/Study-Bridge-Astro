// src/data/team.ts

export interface SocialLink {
  name: 'linkedin' | 'twitter';
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  education: string;
  social: SocialLink[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Avaz Nishonboyev',
    role: 'Direktor',
    image: '/images/team/Avaz_Nishonboyev.jpg',
    bio: "Xalqaro ta'lim sohasida 2+ yillik tajriba",
    education: "Pekin universiteti, Xalqaro ta'lim magistri",
    social: [
      { name: 'linkedin', url: '#' },
      { name: 'twitter', url: '#' }
    ]
  },
  {
    name: 'Maxmud Maxmudov',
    role: 'Xitoydagi ta\'lim agenti',
    image: '/images/team/Maxmud_Maxmudov.jpg',
    bio: "Xitoydagi ta'lim dasturlari bo'yicha mutaxassis",
    education: "Shanghai universiteti, Ta'lim boshqaruvi magistri",
    social: [
      { name: 'linkedin', url: '#' },
      { name: 'twitter', url: '#' }
    ]
  },
  {
    name: 'Shuxrat Usmonov',
    role: 'Konsultant',
    image: '/images/team/Shuxrat_Usmonov.jpg',
    bio: "Grantlar va stipendiyalar bo'yicha mutaxassis",
    education: "Tsinghua universiteti, Xalqaro munosabatlar magistri",
    social: [
      { name: 'linkedin', url: '#' },
      { name: 'twitter', url: '#' }
    ]
  }
];

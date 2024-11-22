import { NextResponse } from 'next/server';

export async function GET() {
  const mockArticle = [
    {
      title: "Ruben Amorim's Net Worth (2024)",
      description:
        "Everything you need to know about Ruben Amorim's net worth, including his salary at Manchester United and his other endorsements.",
      link: 'https://www.givemesport.com/ruben-amorim-net-worth/',
      image_url:
        'https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/11/manchester-united-head-coach-ruben-amorim-smiles-and-waves-to-the-crowd.jpg',
      pubDate: '2024-11-22',
    },
    {
        title: "When is Ruben Amorim's first Man Utd press conference? Details on official unveiling",
        description:
         "Ruben Amorim is set to oversee his first game as Manchester United boss against Ipswich this weekend but before that the Portuguese will speak to the assembled media for the first time",
        link: 'https://www.mirror.co.uk/sport/football/news/man-utd-amorim-ipswich-pressconference-34157900',
        image_url:
         'https://i2-prod.mirror.co.uk/incoming/article34157838.ece/ALTERNATES/s1200d/0_GettyImages-2184772571.jpg',
        pubDate: '2024-11-20',
    },
  ];

  return NextResponse.json(mockArticle); // Return mock data as response
}


interface CardData {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
}

interface TransactionData {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number; 
}

const popularContent: CardData[] = [
  {
    id: 1,
    title: "React for Beginners",
    badge: "New",
    image: "/react.png",
    count: 1200,
  },
  {
    id: 2,
    title: "Node.js Masterclass",
    badge: "Trending",
    image: "/node.png",
    count: 1500,
  },
  {
    id: 3,
    title: "Python Data Science",
    badge: "Popular",
    image: "/redux.png",
    count: 1800,
  },
  {
    id: 4,
    title: "JavaScript Essentials",
    badge: "Hot",
    image: "/javascript.png",
    count: 2000,
  },
  {
    id: 5,
    title: "Next.js Framework",
    badge: "New",
    image: "/nextjs.png",
    count: 1300,
  },
  {
    id: 6,
    title: "TypeScript Fundamentals",
    badge: "Trending",
    image: "/typescript.png",
    count: 1600,
  },
];

const latestTransactions: TransactionData[] = [
  {
    id: 1,
    title: "Monthly Subscription XYZ",
    badge: "Recurring",
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vic2NyaXB0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60", // Example: Abstract for subscription
    count: 49, 
  },
  {
    id: 2,
    title: "One-time Purchase: Pro Tools",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60", // Example: Computer/Software
    count: 199,
  },
  {
    id: 3,
    title: "Client Payment - Project Alpha",
    badge: "Received",
    image: "https://images.unsplash.com/photo-1554224155-1695443517cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW52b2ljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60", // Example: Invoice/Payment
    count: 1250,
  },
  {
    id: 4,
    title: "Refund: Order #5678",
    badge: "Refunded",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60", // Example: Money/Refund
    count: 75,
  },
  {
    id: 5,
    title: "Stock Investment: ACME Corp",
    badge: "Processed",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60", // Example: Stock market chart
    count: 500,
  },
  {
    id: 6,
    title: "Utility Bill: Electricity",
    badge: "Paid",
    image: "https://images.unsplash.com/photo-1609087978259-955a8cf7aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cmljaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60", // Example: Lightbulb/Electricity
    count: 85,
  },
];


const CardList = ({title}: {title: string}) => {
  return (
    <div>CardList</div>
  );
};

export default CardList;
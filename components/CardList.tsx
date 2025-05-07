import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

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


const CardList = ({ title }: { title: string }) => {

  const list = title === 'Popular Content' ? popularContent : latestTransactions;

  return (
    <div className="">
      <h1 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        {title}
      </h1>
      <div className="flex flex-col gap-4">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center gap-4 p-4 rounded-2xl shadow-md border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 min-w-14 rounded-lg relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">
                  {item.title}
                </CardTitle>
                <Badge variant="secondary">
                  {item.badge}
                </Badge>

              </div>
              <CardFooter className="text-sm text-gray-500 dark:text-gray-400 p-0">
                {item.count / 1000}K views
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
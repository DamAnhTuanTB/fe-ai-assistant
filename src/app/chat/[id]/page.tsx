import HomePage from "@/app/home/HomePage";

export default function Chat({ params }: { params: { id: string } }) {
  return <HomePage id={params.id} />;
}

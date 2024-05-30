import SharePage from "./SharePage";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  const chat = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chat-completion/get-detail-chat/${id}`
  ).then((res) => res.json());

  return {
    title: chat?.data?.title || "This is a fantastic chat",
  };
}

async function getData(id: string) {
  const chat = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chat-completion/get-detail-chat/${id}`
  ).then((res) => res.json());

  return chat?.data;
}

export default async function Share({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return <SharePage chat={data} />;
}

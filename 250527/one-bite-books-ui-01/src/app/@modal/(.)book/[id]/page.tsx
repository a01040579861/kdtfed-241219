import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";
import type { BookData } from "@/types";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
    {
      cache: "force-cache",
    }
  );

  if (!responce.ok) {
    throw new Error(responce.statusText);
  }

  const book: BookData = await responce.json();

  return {
    title: `${book.title} - 한입북스`,
    description: `${book.description}`,
    openGraph: {
      title: `${book.title} - 한입북스`,
      description: `${book.description}`,
      images: [book.coverImgUrl],
    },
  };
};

const Page = (props: any) => {
  return (
    <Modal>
      <BookPage {...props} />
    </Modal>
  );
};

export default Page;

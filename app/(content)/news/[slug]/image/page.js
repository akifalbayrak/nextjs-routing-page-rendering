import ModalBackDrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
    const newItemSlug = params.slug;
    const newsItem = await getNewsItem(newItemSlug);
    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <ModalBackDrop />
            <div className="fullscreen-image">
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
            </div>
        </>
    );
}

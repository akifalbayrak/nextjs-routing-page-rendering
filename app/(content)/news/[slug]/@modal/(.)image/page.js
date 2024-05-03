import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function InterceptImagePage({ params }) {
    const newItemSlug = params.slug;
    const newsItem = await getNewsItem(newItemSlug);
    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </div>
            </dialog>
        </>
    );
}

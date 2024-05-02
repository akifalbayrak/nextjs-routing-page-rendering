import NewsList from "@/components/news-list";

export default async function NewsPage() {
    const response = await fetch("http://localhost:8080/news");

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    const news = await response.json();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h1>News</h1>
            <NewsList news={news} />
        </>
    );
}

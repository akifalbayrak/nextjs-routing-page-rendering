import NewsList from "@/components/news-list";
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
} from "@/libs/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
    const filter = params.filter;
    // const news = getNewsForYear(newsYear);
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYear(selectedYear, selectedMonth);
        links = [];
    }

    if (
        (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
        (selectedMonth &&
            !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
    ) {
        throw new Error("Invalid filter.");
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear
                                ? `/archive/${selectedYear}/${link}`
                                : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
}

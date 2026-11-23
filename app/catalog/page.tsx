import Link from "next/link";
import { BottomNav } from "@/components/BottomNav";
import { CatalogContent } from "@/components/CatalogContent";
import { Navbar } from "@/components/Navbar";
import { listings } from "@/mocks/listings";

const CatalogPage = async ({ searchParams }: PageProps<"/catalog">) => {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  const search = query.toLocaleLowerCase("es");
  const visibleListings = listings.filter(({ title, location }) =>
    title.toLocaleLowerCase("es").includes(search) || location.toLocaleLowerCase("es").includes(search),
  );

  return (
    <>
      <Navbar catalogQuery={query} />
      <main className="mx-auto w-full max-w-7xl px-4 pt-4 pb-[calc(9rem+env(safe-area-inset-bottom))] md:px-8 md:pb-10">
        <Link href="/" className="mb-4 inline-flex min-h-11 items-center text-sm font-semibold hover:underline">
          ← Inicio
        </Link>
        <CatalogContent listings={visibleListings} />
      </main>
      <BottomNav exploreHref="/catalog" />
    </>
  );
};

export default CatalogPage;

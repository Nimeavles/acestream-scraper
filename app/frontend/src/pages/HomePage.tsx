import { PageLayout } from "@/components/PageLayout";

export const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-4xl font-bold">Acestream Scraper</h1>
        <p className="text-lg mt-4">
          Welcome to the Acestream Scraper homepage.
        </p>
      </div>
    </PageLayout>
  );
};

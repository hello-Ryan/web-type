import TopNav, { TopNavProps } from "./_components/TopNav";

export default function HomePage() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <TopNav
        tenGameAverage={74}
        allTimeAverage={71}
        numberOfGamesPlayed={123}
      />
      <div className="flex h-full w-full items-center justify-center">
        <p className="w-6/12">
          It was the best of times, it was the worst of times, it was the age of
          wisdom, it was the age of foolishness, it was the epoch of belief, it
          was the epoch of incredulity, it was the season of Light, it was the
          season of Darkness, it was the spring of hope, it was the winter of
          despair
        </p>
      </div>
    </main>
  );
}

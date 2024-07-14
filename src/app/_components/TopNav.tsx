import Link from "next/link";

export interface TopNavProps {
  tenGameAverage: number;
  numberOfGamesPlayed: number;
  allTimeAverage: number;
}

export default function TopNav({
  tenGameAverage,
  numberOfGamesPlayed,
  allTimeAverage,
}: TopNavProps) {
  const items = [tenGameAverage, allTimeAverage, numberOfGamesPlayed];
  return (
    <nav className="border-b p-4 text-xl font-semibold">
      <div>
        <span className="flex w-full justify-between">
          <Link href="/">Test</Link>
          <div className="flex flex-row gap-12 font-normal">
            {items.map((x) => (
              <div className="hover:cursor-default">{x}</div>
            ))}
          </div>
        </span>
      </div>
    </nav>
  );
}

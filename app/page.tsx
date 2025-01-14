export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>
          Shopping List
        </h3>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Sugar
          </li>
          <li>
            Salt
          </li>
        </ol>
        <h3>
          Items
        </h3>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Tomato
          </li>
          <li>
            Onion
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/shriramcs"
            target="_blank"
            rel="noopener noreferrer"
          >
            by shriramcs
          </a>
        </span>
      </footer>
    </div>
  );
}

import Socials from "@/components/socials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-center p-24 font-mono">
      <div className="flex flex-col items-center justify-center lg:text-2xl select-none">
        <h1>🚧 This is a construction site 🚧</h1>
        <span className="text-sm italic">or a site in construction?</span>
      </div>

      <div className="h-16"></div>

      <div className="flex flex-col items-center justify-center gap-4 select-none">
        <p>
          There seems to be construction going on. For now, refer to my socials:
        </p>

        <Socials />

        <p>
          Or mail me with{" "}
          <a
            className="underline underline-offset-4 hover:text-blue-500"
            href="mailto:contact@jorislodewijks.nl"
          >
            my mail address
          </a>
          .
        </p>
      </div>
    </main>
  );
}

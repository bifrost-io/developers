import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center md:items-start lg:items-start justify-center h-[630px] px-8 md:px-16 lg:px-16">
        <p className="px-4 py-2 mb-16 text-sm border-2 rounded-full dark:border-purple-500 border-purple-600 w-fit text-purple-600 dark:text-purple-400">
          The crosschain staking layer
        </p>
        <h1 className="text-center text-3xl md:text-left md:text-5xl lg:text-left lg:text-7xl font-bold lg:w-2/3">
          Bifrost Developer Documentation
        </h1>
        <div className="flex flex-row gap-4 mt-16">
          <Link
            href="/docs"
            className="px-8 py-3 dark:bg-[#ffffff] bg-[#000000] dark:text-[#000000] text-[#ffffff] rounded-full w-fit lg:text-3xl hover:dark:bg-[#ffffff]/80 hover:bg-[#000000]/80"
          >
            Getting started
          </Link>
          <a
            href="https://www.youtube.com/@bifrostio"
            target="_blank"
            className="px-8 py-3 dark:bg-gray-800 bg-gray-300 dark:text-white text-black rounded-full w-fit lg:text-3xl hover:dark:bg-gray-700 hover:bg-gray-400"
          >
            Videos
          </a>
        </div>
      </div>
    </div>
  );
}

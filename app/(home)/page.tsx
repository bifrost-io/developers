import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center md:items-start lg:items-start justify-center h-[630px] px-8 md:px-16 lg:px-16">
        <p className="px-4 py-2 mb-16 text-sm border-2 rounded-full dark:border-blue-400 border-blue-500 w-fit text-blue-500 dark:text-blue-400">
          Một dự án cộng đồng bởi{" "}
          <Link
            href="https://zxstim.com"
            target="_blank"
            className="text-blue-500 dark:text-blue-400 underline hover:text-primary/80"
          >
            ZxStim
          </Link>
        </p>
        <h1 className="text-center text-3xl md:text-left md:text-5xl lg:text-left lg:text-7xl font-bold lg:w-2/3">
          Bách khoa toàn thư về{" "}
          <span className="text-blue-500 dark:text-blue-400">
            tài chính phi tập trung
          </span>
        </h1>
        <div className="flex flex-row gap-4 mt-16">
          <Link
            href="/tai-lieu"
            className="px-8 py-3 dark:bg-[#ffffff] bg-[#000000] dark:text-[#000000] text-[#ffffff] rounded-full w-fit lg:text-3xl hover:dark:bg-[#ffffff]/80 hover:bg-[#000000]/80"
          >
            Bắt đầu
          </Link>
          <a
            href="https://www.youtube.com/@defivn"
            target="_blank"
            className="px-8 py-3 dark:bg-gray-800 bg-gray-300 dark:text-white text-black rounded-full w-fit lg:text-3xl hover:dark:bg-gray-700 hover:bg-gray-400"
          >
            Xem video
          </a>
        </div>
      </div>
    </div>
  );
}

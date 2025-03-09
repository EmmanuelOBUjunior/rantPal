import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Header/>
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-purple-600 dark:text-purple-400">RantPal</h1>
        <p className="text-xl mb-8">
          The AI therapist that gives hilariously bad advice to frustrated
          developers.
          <br />
          <span className="dark:text-purple-300 text-purple-500">
            Because sometimes you just need to rant.
          </span>
        </p>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 italic">
            "Bugs driving you crazy? Code not compiling? Manager setting
            impossible deadlines?"
            <br />
            Rant to our AI and get the most impractical adice you've ever
            heard!.
          </p>
          <Link
            href="/chat"
            className="dark:bg-purple-500 dark:hover:bg-purple-600 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Ranting
          </Link>
        </div>
      </div>
    </div>
  );
}

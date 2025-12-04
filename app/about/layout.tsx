import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-48px)] bg-amber-100 flex justify-center items-start pt-10">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">

        <nav className="flex items-center justify-center gap-4 mb-8">
          <Link
            href="/about/background"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Background
          </Link>

          <Link
            href="/about/skills"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Skills
          </Link>

          <Link
            href="/about/experience"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Experience
          </Link>
        </nav>
        <div className="text-gray-800">{children}</div>
      </div>
    </div>
  );
}

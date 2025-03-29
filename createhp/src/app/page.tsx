import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  // Sample article data
  
  const articles = [
    {
      id: 1,
      title: "プロジェクト開発の効率化について",
      content:
        "最近のプロジェクトでは、開発効率を上げるために様々な工夫をしています。例えば、自動テストの導入や、CI/CDパイプラインの最適化などが挙げられます。これにより、開発サイクルが短縮され...",
    },
    {
      id: 2,
      title: "最新のWeb技術トレンド",
      content:
        "Webフロントエンド開発の世界では、常に新しい技術やフレームワークが登場しています。ReactやNext.jsの進化に加え、最近ではAstroやSvelteKitなども注目を集めています...",
    },
    {
      id: 3,
      title: "UIデザインの基本原則",
      content:
        "効果的なUIデザインには、いくつかの基本原則があります。ユーザビリティ、アクセシビリティ、一貫性などが重要です。特に、ユーザーの行動パターンを理解し、それに合わせたデザインを...",
    },
    {
      id: 4,
      title: "パフォーマンス最適化の実践例",
      content:
        "Webアプリケーションのパフォーマンスは、ユーザー体験に直結する重要な要素です。画像の最適化、コード分割、キャッシュ戦略など、様々な手法を組み合わせることで、大幅な改善が...",
    },
  ]

  return (
    <main className="min-h-screen relative">
      {/* Background with top image and bottom color */}
      <div className="absolute inset-0 z-0">
        <div className="h-[40vh] relative">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Background header image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="h-[60vh] bg-blue-50"></div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="bg-white rounded-lg shadow-md p-4 mb-8">
          <ul className="flex space-x-6 justify-center">
            <li>
              <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/archive" className="font-medium hover:text-blue-600 transition-colors">
                Archive
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-blue-600 transition-colors"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          {/* Profile section */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Profile picture"
                  width={120}
                  height={120}
                  className="rounded-full mb-4"
                />
                <h2 className="text-xl font-bold mb-2">山田 太郎</h2>
                <p className="text-gray-600 mb-4">ただv0を使ったみただけ</p>
              </div>

              <div className="flex justify-center space-x-4 mb-6">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Twitter
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  LinkedIn
                </Link>
                <Link href="mailto:contact@example.com" className="text-blue-500 hover:text-blue-700">
                  Email
                </Link>
              </div>

              <div className="border-t pt-4">
                <p className="text-center italic text-gray-700">試作ページです</p>
              </div>
            </div>
          </div>

          {/* Articles section */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
              <h2 className="text-2xl font-bold mb-6">最近の記事</h2>
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {articles.map((article) => (
                  <article key={article.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-700">{article.content}</p>
                    <Link href={`/article/${article.id}`} className="inline-block mt-2 text-blue-600 hover:underline">
                      続きを読む →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


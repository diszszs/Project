// app/united-store/home-jersey.tsx
import Link from "next/link";

export default function HomeJersey() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-end p-6 space-x-4">
        {/* Home Link */}
        <Link href="/" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-600">
            Home
          </button>
        </Link>
        
        {/* United Store Link */}
        <Link href="/united-store" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            United Store
          </button>
        </Link>
      </header>

      {/* Product Details */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-bold mb-8">Manchester United Home Jersey</h1>
        <img
          src="https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg"
          alt="Manchester United Home Jersey"
          width={400}
          height={400}
          className="object-contain mb-4"
        />
        <p className="text-lg mb-4">Size: M, L, XL</p>
        <p className="text-2xl font-semibold text-yellow-400 mb-4">฿2,590.00</p>

        <Link href="/checkout" passHref>
          <button className="w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700">
            Add to Cart
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 mt-auto">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

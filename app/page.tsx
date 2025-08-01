// 'use client';

// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//   }, []);

//   return (
//     <main className="font-sans text-gray-800">
//       {/* ナビゲーション */}
// <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20 px-6 py-4 flex justify-between items-center">
//   <h1 className="text-center font-bold text-gray-900">水炊き 天</h1>

//   {/* ハンバーガー（スマホ用） */}
//   <button
//     className="md:hidden text-3xl"
//     onClick={() => setMenuOpen(!menuOpen)}
//     aria-label="メニューを開閉"
//   >
//     {menuOpen ? '✕' : '☰'}
//   </button>

//   {/* PC用メニュー */}
//   <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
//     <a href="#top">水炊き天</a>
//     <a href="#menu">メニュー</a>
//     <a href="#kodawari">こだわり</a>
//     <a href="#access">アクセス</a>
//   </div>
// </nav>

// {/* スマホ用メニュー（開閉式） */}
// {menuOpen && (
//   <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow z-10 flex flex-col items-center gap-4 py-4">
//     <a href="#top" onClick={() => setMenuOpen(false)}>水炊き天</a>
//     <a href="#menu" onClick={() => setMenuOpen(false)}>メニュー</a>
//     <a href="#kodawari" onClick={() => setMenuOpen(false)}>こだわり</a>
//     <a href="#access" onClick={() => setMenuOpen(false)}>アクセス</a>
//   </div>
// )}


//       {/* トップ */}
//       <section
//         id="top"
//         className="h-screen bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/hero.jpg')" }}
//       >
//         <h1 className="text-4xl md:text-6xl text-white font-bold bg-black bg-opacity-60 px-8 py-4 rounded-xl shadow-lg">
//           水炊き 天
//         </h1>
//       </section>

//       {/* メニュー */}
//       <section id="menu" className="scroll-mt-20 py-24 px-6 bg-white">
//         <div className="max-w-screen-md mx-auto">
//           <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300">メニュー</h2>
//           <ul className="space-y-2 text-lg">
//             <li>・水炊きコース（3,500円）</li>
//             <li>・鶏刺し盛り合わせ（1,200円）</li>
//             <li>・〆の雑炊（+300円）</li>
//           </ul>
//         </div>
//       </section>

//       {/* こだわり */}
//       <section id="kodawari" className="scroll-mt-20 py-24 px-6 bg-gray-50">
//         <div className="max-w-screen-md mx-auto">
//           <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300">こだわり</h2>
//           <p className="text-lg leading-relaxed">
//             国産の朝引き鶏をじっくり炊き上げた白濁スープが自慢。
//             無添加・無化調で、素材の旨味を最大限に引き出しています。
//           </p>
//         </div>
//       </section>

//       {/* アクセス */}
//       <section id="access" className="scroll-mt-20 py-24 px-6 bg-white">
//         <div className="max-w-screen-md mx-auto">
//           <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300">アクセス</h2>
//           <p className="mb-4 text-lg">〒000-0000 大阪市〇〇区△△1-2-3</p>

//           {/* GoogleマップはURLを本番用に変更する */}
//           <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
//             Google Mapは後で挿入（APIキー付きURLが必要です）
//           </div>
//         </div>
//       </section>

//       {/* フッター */}
//       <footer className="bg-gray-800 text-white text-center py-8 text-sm">
//         <p className="mb-1">水炊き 天 ｜ 住所：大阪市〇〇区△△1-2-3</p>
//         <p>電話：06-xxxx-xxxx ｜ 営業時間：17:00〜23:00（火曜定休）</p>
//       </footer>
//     </main>
//   );
// }
// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <h1 className="text-4xl text-blue-500 font-bold">Tailwindが効いてます！</h1>
    </main>
  );
}

"use client";
declare global {
  interface Window {
    tiktokEmbedLoad?: () => void;
  }
}


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTiktok } from 'react-icons/fa';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  // スクロール止まったら1秒後にポップアップ表示するで〜
  useEffect(() => {
    const handleScroll = () => {
      setShowPopup(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowPopup(true);
      }, 1000); // 止まってから1秒やで
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ページ全体スムーズにスクロールさせるんや
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // TikTok埋め込みスクリプトを1回だけ読み込むで！
  useEffect(() => {
    const scriptId = "tiktok-embed-script";
  
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // すでにあるなら再実行
      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad();
      }
    }
  }, []);
  
  

  // スライドアップのアニメーションや！ぬるっと出てくるで
  const slideInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="font-kai text-gray-800 bg-[url('/images/washi.jpg')] bg-cover bg-fixed bg-center">
      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20 px-6 py-4 flex justify-between items-center">
        <h1 className="text-center font-bold text-gray-900 ">
          <a href="#top" onClick={() => setMenuOpen(false)}>
            水炊き天
          </a>
        </h1>

        {/* ハンバーガー（スマホ用） */}
        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開閉"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* PC用メニュー */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          <a href="#sns">最新情報</a>
          <a href="#menu">メニュー</a>
          <a href="#kodawari">こだわり</a>
          <a href="#jouhou">店舗情報</a>
          <a href="#access">アクセス</a>
        </div>
      </nav>

      {/* スマホ用メニュー */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed md:hidden inset-0 bg-opacity-20 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setMenuOpen(false)} // 背景クリックで閉じる
          >
            <motion.div
              className="absolute top-16 left-0 w-full bg-white/90 shadow z-20 flex flex-col items-center gap-4 py-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // メニュー内部クリックでは閉じない
            >
              <a href="#sns" onClick={() => setMenuOpen(false)}>
                最新情報
              </a>
              <a href="#menu" onClick={() => setMenuOpen(false)}>
                メニュー
              </a>
              <a href="#kodawari" onClick={() => setMenuOpen(false)}>
                こだわり
              </a>
              <a href="#jouhou" onClick={() => setMenuOpen(false)}>
                店舗情報
              </a>
              <a href="#access" onClick={() => setMenuOpen(false)}>
                アクセス
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* トップセクション（アニメーションなし） */}
      <motion.section
        id="top"
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* 背景画像レイヤー */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
          initial={{ scale: 1.25, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3 }}
        />

        {/* 画像ロゴ */}
        <motion.img
          src="/images/logo.png"
          alt="水炊き 天"
          className="z-5 w-60 md:w-80 "
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.section>

      <motion.section
  id="sns"
  className="scroll-mt-20 pt-24 pb-10 px-6"
  variants={slideInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  <div className="max-w-screen-md mx-auto text-left">
    <h2 className="text-3xl font-bold mb-10 border-b pb-2 border-black">最新情報</h2>

    {/* Instagramセクション */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-4">Instagram</h3>
      <div className="overflow-x-auto flex gap-4 scrollbar-hide snap-x snap-mandatory pb-4">
        {[
          "https://www.instagram.com/p/DBQjjlrSCHf/",
          "https://www.instagram.com/p/C_kuDHqyKeu/",
          "https://www.instagram.com/p/C-hYtQ1SgSh/",
          "https://www.instagram.com/p/C-puTfsydoR/",
        ].map((url, index) => {
          const embedUrl = url.replace(/\/$/, "") + "/embed";
          return (
            <iframe
              key={index}
              src={embedUrl}
              width="320"
              height="505"
              className="flex-shrink-0 snap-center rounded shadow border"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              title={`Instagram post ${index + 1}`}
            ></iframe>
          );
        })}
      </div>

      {/* Instagram誘導ボタン（右寄せ） */}
      <div className="flex justify-end mt-4">
        <a
          href="https://www.instagram.com/ten.mizutaki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500/50 hover:bg-blue-400 text-gray-800 px-4 py-2 rounded shadow text-sm"
        >
          Instagramを見る
        </a>
      </div>
    </div>

    {/* TikTokセクション */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">TikTok</h3>
      <div className="overflow-x-auto flex gap-4 scrollbar-hide snap-x snap-mandatory pb-4">
        {[
          "7533142564396977415",
          "7528277274702155026",
          "7523608527051558151",
          "7522835541470039304",
        ].map((id, index) => (
          <iframe
            key={index}
            src={`https://www.tiktok.com/embed/v2/${id}`}
            width="320"
            height="575"
            allow="autoplay; encrypted-media"
            allowFullScreen
            scrolling="no"
            className="rounded shadow flex-shrink-0 snap-center"
          />
        ))}
      </div>

      {/* TikTok誘導ボタン（右寄せ） */}
      <div className="flex justify-end mt-4">
        <a
          href="https://www.tiktok.com/@10.mizutaki"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500/50 hover:bg-blue-400 text-gray-800 px-4 py-2 rounded shadow text-sm"
        >
          TikTokを見る
        </a>
      </div>
    </div>
  </div>
</motion.section>



      {/* メニュー */}
      <motion.section
        id="menu"
        className="scroll-mt-20 pt-24 py-14 px-6 overflow-hidden"
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="max-w-screen-md mx-auto">
          {/* メニュー画像 */}
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-black">
            メニュー
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <img
              src="/images/menu1.png"
              alt="メニュー画像1"
              className="w-full sm:w-1/2 h-auto object-contain"
            />
            <img
              src="/images/menu2.png"
              alt="メニュー画像2"
              className="w-full sm:w-1/2 h-auto object-contain"
            />
          </div>

          {/* ドリンクメニュー */}
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-black">
            ドリンクメニュー
          </h2>
          <div className="w-full border border-gray-300 text-sm bg-white/70">
            {[
              {
                title: "生ビール",
                items: [
                  ["サッポロ黒ラベル中", "600円"],
                  ["サッポロ黒ラベル小", "450円"],
                ],
              },
              {
                title: "瓶ビール",
                items: [
                  ["アサヒスーパードライ", "750円"],
                  ["サッポロ赤星", "750円"],
                  ["キリン一番搾り", "750円"],
                ],
              },
              {
                title: "ノンアルコールビール",
                items: [["アサヒスーパードライゼロ", "600円"]],
              },
              {
                title: "ウイスキー",
                items: [
                  ["デュワーズホワイトラベル", "600円"],
                  ["知多", "1,100円"],
                  ["（ロック・水割り・ハイボール）", ""],
                ],
              },
              {
                title: "チューハイ",
                items: [["レモン／ライム／もも／カルピス", "各500円"]],
              },
              {
                title: "麦焼酎",
                items: [
                  ["二階堂", "550円"],
                  ["中々", "600円"],
                  ["宇佐むぎ", "650円"],
                ],
              },
              {
                title: "芋焼酎",
                items: [
                  ["黒霧島", "550円"],
                  ["たちばな", "600円"],
                  ["田倉", "650円"],
                  ["紫の赤 兎馬", "650円"],
                ],
              },
              {
                title: "限定原酒焼酎",
                items: [
                  ["百年の孤独", "1,200円"],
                  ["天使の誘惑", "1,200円"],
                  ["とりかい", "700円"],
                ],
              },
              {
                title: "黒糖焼酎",
                items: [["れんと", "600円"]],
              },
              {
                title: "ボトルキープ",
                items: [
                  ["二階堂", "3,300円"],
                  ["中々", "3,500円"],
                  ["黒霧島", "3,300円"],
                  ["たちばな", "3,500円"],
                  ["れんと", "3,500円"],
                  ["（ロック・お湯割り・水割り）", ""],
                ],
              },
              {
                title: "日本酒",
                items: [
                  ["冷酒（半合）", ""],
                  ["三井の寿", "500円"],
                  ["獺祭", "500円"],
                  ["日日", "500円"],
                  ["磯自慢", "500円"],
                  ["上喜元", "500円"],
                  ["熱燗（1合）", ""],
                  ["八海山", "800円"],
                  ["三千盛", "800円"],
                  ["加賀金秀", "800円"],
                ],
              },
              {
                title: "果実酒",
                items: [
                  ["赤しそ梅酒", "500円"],
                  ["はっさく梅酒", "500円"],
                ],
              },
              {
                title: "ワイン",
                items: [
                  ["アルガーノ クラン【赤】ボトル375ml", "2,500円"],
                  ["アルガブランカ クラレーゼ【白】ボトル375ml", "2,500円"],
                ],
              },
              {
                title: "スパークリングワイン",
                items: [["高畠 喜【スパークリング】ボトル750ml", "6,000円"]],
              },
              {
                title: "ソフトドリンク",
                items: [
                  [
                    "ウーロン茶／オレンジジュース／カルピス／コーラ／ジンジャーエール",
                    "各400円",
                  ],
                ],
              },
            ].map(({ title, items }, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row border-b border-gray-300"
              >
                <div className="md:w-1/3 bg-gray-100 p-2 font-semibold whitespace-pre-line">
                  {title}
                </div>
                <div className="md:w-2/3 p-2">
                  <table className="w-full">
                    <tbody>
                      {items.map(([label, price], i) => (
                        <tr key={i} className="flex justify-between">
                          <td className="pr-4">{label}</td>
                          <td className="text-right whitespace-nowrap">
                            {price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          {/* 食べ飲み放題付きコース（1枚のメニュー表として表示） */}
{/* 食べ飲み放題付きコース（画像風背景に変更） */}
<h2 className="text-2xl font-bold mb-3 border-b pb-1 border-black mt-10">
  食べ飲み放題付きコース
</h2>
{/* 飲み放題利用条件の注意書き */}
<p className="text-sm text-gray-800 my-4">
  ※ご予約様限定で飲み放題付きコースが利用できます。お早めにご予約ください。3名様以上でご利用いただけます。
</p>


<div className="overflow-x-auto bg-[#fdfaf3] border border-gray-300 rounded-md text-base">
  <table className="w-full table-fixed border-collapse mb-2">
    <thead>
      <tr className="text-center text-lg">
        <th className="w-1/2 py-2 border-b border-gray-300">5000円コース</th>
        <th className="w-1/2 py-2 border-b border-gray-300">5500円コース</th>
      </tr>
    </thead>
    <tbody className="align-top text-center">
      {[
        ["すもつ", "すもつ"],
        ["サラダ", "サラダ"],
        ["鶏のたたき", "鶏のたたき"],
        ["ポテトフライ", "馬刺し"],
        ["揚げ物", "ポテトフライ"],
        ["焼き物", "揚げ物"],
        ["とり雑炊", "焼き物"],
        ["デザート", "とり雑炊"],
        ["", "デザート"],
      ].map(([left, right], index) => (
        <tr key={index}>
          <td className="py-1.5 px-3">{left}</td>
          <td className="py-1.5 px-3">{right}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
{/* 飲み放題メニュー */}

<div className="bg-[#fdfaf3] border border-gray-300 rounded-md p-4 mt-4 text-sm md:text-base leading-tight">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {/* 左列 */}
    <div>
      <p className="font-bold mb-2">〇生ビール</p>
      <p className="font-bold mb-2">〇ノンアルコールビール</p>
      <p className="font-bold mb-2">〇酎ハイ</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>プレーン</li>
        <li>レモン</li>
        <li>ピーチ</li>
        <li>カルピス</li>
        <li>ライム</li>
      </ul>
      <p className="font-bold mb-2">〇ウイスキー</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>デュワーズ</li>
      </ul>
      <p className="font-bold mb-2">〇果実酒</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>梅酒</li>
        <li>赤しそ梅酒</li>
        <li>はっさく梅酒</li>
      </ul>
    </div>

    {/* 中央列 */}
    <div>
      <p className="font-bold mb-2">〇芋焼酎</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>黒霧島</li>
      </ul>
      <p className="font-bold mb-2">〇麦焼酎</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>二階堂</li>
      </ul>
      <p className="font-bold mb-2">〇黒糖焼酎</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>れんと</li>
      </ul>
      <p className="font-bold mb-2">〇カクテル</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>カシスオレンジ</li>
        <li>カシスウーロン</li>
        <li>カシスソーダ</li>
        <li>ファジーネーブル</li>
        <li>ピーチウーロン</li>
        <li>ピーチソーダ</li>
      </ul>
    </div>

    {/* 右列 */}
    <div>
      <p className="font-bold mb-3">〇翠じん</p>
      <p className="font-bold mb-3">〇日本酒</p>
      <p className="font-bold mb-2">〇ソフトドリンク</p>
      <ul className="list-disc list-inside mb-2 ml-4">
        <li>コーラ</li>
        <li>烏龍茶</li>
        <li>カルピス</li>
        <li>ジンジャエール</li>
        <li>オレンジジュース</li>
      </ul>
    </div>
  </div>
</div>



        </div>
      </motion.section>

      {/* こだわり */}
      <motion.section
        id="kodawari"
        className="scroll-mt-20 pt-24 pb-10 px-6 sm:px-10"
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-md w-full mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-black text-left">
            こだわり
          </h2>

          <div className="space-y-20 text-base leading-relaxed text-left text-gray-800">
            {/* セクション 1 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <img
                src="/images/kodawari1.png"
                alt="博多水炊き"
                className="w-[90%] mx-auto md:w-1/2 rounded-lg shadow-md max-h-52 object-cover"
              />

              <p>
                ゆったりとした食事の時間を通して特別な体験をお届けできるよう、和モダンな雰囲気の店舗で博多水炊きをご提供しております。
                厳選した素材やお酒をご用意し、食材の味を引き立てながらお客様一人ひとりにご満足いただける提供方法を追求しています。
                少人数から団体様での利用まで、幅広くご活用いただけます。
              </p>
            </div>

            {/* セクション 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/images/kodawari2.png"
                alt="博多水炊き"
                className="w-[90%] mx-auto md:w-1/2 rounded-lg shadow-md max-h-52 object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  本場の味を楽しめる博多水炊き専門店
                </h3>
                <p>
                  周辺エリアでは数少ない博多水炊きの専門店として、本場の味をお楽しみいただける店舗づくりに努めております。
                  博多水炊きをメインにいくつかのコースをご用意しており、博多名物のすもつをはじめ、鶏や野菜の旨味をご堪能いただける鍋料理を自家製ポン酢とともにご提供します。
                  ご自宅では再現の難しい高級感のある味わいを追求し、親しい方同士の食事はもちろん、親族顔合わせやビジネスシーンにおける接待など重要な場としてもご活用いただける落ち着いた空間づくりを行っています。
                  黒と白の色合いに木目の温かみをプラスした大人のための空間で、お好みのお酒とともに特別なひとときを過ごしませんか。
                </p>
              </div>
            </div>

            {/* セクション 3 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <img
                src="/images/kodawari3.jpg"
                alt="博多水炊き"
                className="w-[90%] mx-auto md:w-1/2 rounded-lg shadow-md max-h-52 object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  おいしい日本酒にこだわったラインアップ
                </h3>
                <p>
                  素材の味わいをご堪能いただける博多水炊きに合うお酒のラインアップにこだわり、月ごとにおすすめの銘柄をご用意しております。
                  日本酒だけでなくビールやウイスキー、果実酒などアルコールメニューが充実しているため、職場の歓送迎会や新年会、サークルやゼミなど様々な集まりにご活用いただけます。
                  座席はカウンター席をはじめテーブル席や掘りごたつ席があり、団体様での貸切利用にも柔軟に対応しております。
                  一品目のすもつから締めの雑炊まで、素材の味や香りをお楽しみいただけます。
                </p>
              </div>
            </div>

            {/* セクション 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/images/kodawari4.jpg"
                alt="博多水炊き"
                className="w-[90%] mx-auto md:w-1/2 rounded-lg shadow-md max-h-52 object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  熊本から産地直送で仕入れた馬刺しをご用意
                </h3>
                <p>
                  博多水炊きとともにお酒をお楽しみいただくため、馬刺しや鶏の一品料理をご用意しております。
                  熊本から仕入れた産地直送の馬刺しは臭みを感じないよう工夫しており、日頃馬刺しに馴染みのない方でも安心してお召し上がりいただけます。
                  唐揚げ等の一品料理はメインへの追加としても最適で、その日の気分や食べたい量に合わせて気軽に組み合わせられます。
                  ゆったりと過ごせる落ち着きのある店内は、特別なお祝いから賑やかな飲み会まで幅広いシーンにご活用いただけます。
                </p>
              </div>
            </div>

            {/* セクション 5（締め） */}
            <div className="text-left">
              <p>
                食材の旨味を感じられる博多水炊きで、親しい方や大切な方と特別な時間を過ごしませんか。
                枚方で博多水炊き専門店を営み、日本料理店のような趣のある店内で様々なお席をご用意しております。
                お食事はもちろんお祝いや宴会にも対応し、貸切のご相談も承っております。
                落ち着いた雰囲気で、本格的な味わいと好みのお酒を楽しめる空間をご用意しています。
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 店舗情報 */}
      <motion.section
        id="jouhou"
        className="scroll-mt-20 pt-24 pb-10 px-6 sm:px-10"
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-md w-full mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-black text-left">
            店舗情報
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-base text-left px-10">
            <div className="font-semibold">【住所】</div>
            <div>
              〒573-0102
              <br />
              大阪府枚方市長尾家具町2丁目15-2
              <br />
              家具町ハイツ108
              <br />
              <a
                href="https://maps.google.com?q=大阪府枚方市長尾家具町2丁目15-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 underline"
              >
                Google MAPで確認
              </a>
            </div>

            <div className="font-semibold">【電話番号】</div>
            <div>070-9094-4338</div>

            <div className="font-semibold">【営業時間】</div>
            <div>
              17:30〜23:00
              <br />
              <span className="text-sm text-gray-600">
                ※21:30最終入店／22:00ラストオーダー
              </span>
            </div>

            <div className="font-semibold">【定休日】</div>
            <div>木曜日</div>

            <div className="font-semibold">【駐車場／喫煙】</div>
            <div>
              店舗前に3台あり
              <br />
              電子タバコのみ全席喫煙OK
            </div>

            <div className="font-semibold">【決済方法】</div>
            <div>現金・クレジットカード・電子マネー・QRコード決済</div>
          </div>
        </div>
      </motion.section>

      {/* アクセス */}
      <motion.section
        id="access"
        className="scroll-mt-20 pt-24 pb-10 px-6"
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-black">
            アクセス
          </h2>

          <p className="mb-4 text-lg">
            〒573-0102
            <br />
            大阪府枚方市長尾家具町2丁目15-2
            <br />
            家具町ハイツ108
          </p>

          <div className="w-full h-64 sm:h-96 rounded overflow-hidden shadow">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.6026870831183!2d135.70972170000005!3d34.8410808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011b30bb15d559%3A0x60a9f76d0cc538b1!2z5rC054KK44GN5aSp!5e0!3m2!1sja!2sjp!4v1754445581577!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* フッター */}
      <footer className="bg-gray-800/60 text-white py-8 text-sm pb-30">
        <div className="max-w-screen-sm mx-auto px-6 text-left">
          <p className="mb-1">
            水炊き 天 ｜ 住所：大阪府枚方市長尾家具町2丁目15-2 家具町ハイツ108
          </p>
          <p>
            電話：070-9094-4338 ｜
            営業時間：17:30〜23:00（※21:30最終入店／22:00ラストオーダー）
          </p>
        </div>
      </footer>

<AnimatePresence>
  {showPopup && (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 w-full z-50 bg-blue-900 text-white shadow-lg"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-3 sm:px-8">
        {/* 上部：テキスト＋SNSアイコン */}
        <div className="flex justify-center items-center gap-2 mb-2">
          <p className="text-sm sm:text-base whitespace-nowrap">
            ＼ お気軽にお問い合わせください ／
          </p>

          {/* SNSアイコン（常に表示） */}
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/ten.mizutaki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center bg-pink-500 text-white rounded-full shadow hover:opacity-90 transition-all"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.tiktok.com/@10.mizutaki?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full shadow hover:opacity-90 transition-all"
            >
              <FaTiktok className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 下部：電話＋お問い合わせ */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {/* 電話 */}
          <a
            href="tel:07090944338"
            className="flex items-center gap-2 bg-blue-300 text-blue-900 px-4 py-2 rounded-full shadow hover:opacity-90 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1.2 1.2 0 011.3-.3 12.5 12.5 0 003.9.6 1.2 1.2 0 011.2 1.2v3.8a1.2 1.2 0 01-1.2 1.2A18 18 0 013 6.6a1.2 1.2 0 011.2-1.2H8a1.2 1.2 0 011.2 1.2 12.5 12.5 0 00.6 3.9 1.2 1.2 0 01-.3 1.3L6.6 10.8z" />
            </svg>
            <span className="text-base">070-9094-4338</span>
          </a>

          {/* メール */}
          <a
            href="mailto:ooyayusei@gmail.com"
            className="flex items-center gap-2 bg-lime-400 text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8 8-8" />
            </svg>
            <span className="text-base">お問い合わせ</span>
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </main>
  );
}
// git status                    
// git add .                       
// git commit -m "Fix something"  
// git push                        
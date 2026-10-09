import Image from "next/image";
import news from "../json-data/news.json"

export default function Home() {
  return (
    <div className="bg-white py-6 px-10 ">
      <div className="grid grid-cols-3 gap-4">
        {news.news.map((newsItem) => (
          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg space-y-2">
            <h2 className="text-lg font-semibold">{newsItem.title}</h2>
            <p className="text-gray-700 line-clamp-3">{newsItem.description}</p>
            <button className="bg-blue-300 p-2 rounded-lg">Read More</button>
          </div>
        ))}


      </div>

    </div>
  );
}

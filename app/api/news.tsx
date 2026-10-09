import {NextResponse} from "next/server";
import newsData from "@/json-data/news.json";

export async function GET(request:Request) {
    return NextResponse.json(newsData)
}
import fs from 'fs';
import path from 'path';
import {NextResponse} from "next/server";

export async function GET() {
    const directoryPath = path.join(process.cwd(), 'public/movies');

    return NextResponse.json(fs.readdirSync(directoryPath))
}
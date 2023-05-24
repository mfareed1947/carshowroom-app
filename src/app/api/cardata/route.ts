import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres';

export async function GET(request: NextRequest) {
    const client = await db.connect();
    try {
        await client.sql`CREATE TABLE cardata ( Id Serial ,CarName varchar(255), Company varchar(255),Prices varchar(255) );`;
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ message: 'apna kaam sahi se check karo' })
    }
    const data = await client.sql`SELECT * FROM cardata;`;
    return NextResponse.json({ data });
}
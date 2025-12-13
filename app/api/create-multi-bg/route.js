import dbConnect from '@/lib/dbConnect';
import bgModel from '@/models/bgModel';
const mongoose = require('mongoose');
const { NextResponse } = require('next/server');
const LoadDB = async () => {
    await dbConnect();
}
LoadDB();
export async function GET(request) {
}
export async function POST(request) {
    try {
        const data = await request.json();
        const savedData = await bgModel.insertMany(data);
        return NextResponse.json({success: true, message: 'Data Saved to database', data: savedData})
    } catch (error) {
        return NextResponse.json({success: false, message: 'Error while saving data: ' + error});
    }
}
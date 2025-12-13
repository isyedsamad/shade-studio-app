import dbConnect from '@/lib/dbConnect';
import bgModel from '@/models/bgModel';
const mongoose = require('mongoose');
const { NextResponse } = require('next/server');
const LoadDB = async () => {
    await dbConnect();
}
LoadDB();
export async function GET(request) {
    try {
        const bgList = await bgModel.find();
        return NextResponse.json({success: true, data: bgList});
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({success: false, data: []})
    }
}
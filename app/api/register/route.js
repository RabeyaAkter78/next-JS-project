import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password, contact, address } = await req.json();

        if (!name || !email || !password || !contact || !address) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        await connectMongoDB();

        const userExists = await User.findOne({ email }).select('_id');
        if (userExists) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            contact,
            address,
        });

        await newUser.save();

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.log("API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

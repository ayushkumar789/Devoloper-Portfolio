import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const name = formData.get("name")?.toString() || "";
        const phone = formData.get("phone")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const subject = formData.get("subject")?.toString() || "";
        const message = formData.get("message")?.toString() || "";

        await addDoc(collection(db, "messages"), {
            name,
            phone,
            email,
            subject,
            message,
            submittedAt: new Date().toISOString()
        });

        return NextResponse.json({ success: true, message: "Message sent!" });
    } catch (err) {
        console.error("Firestore Error:", err);
        return NextResponse.json({ success: false, message: "Submission failed." }, { status: 500 });
    }
}

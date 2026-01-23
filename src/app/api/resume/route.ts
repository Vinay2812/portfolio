import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://cdn.personel.prodapp.club/Vinay-resume.pdf",
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch resume" },
      { status: response.status },
    );
  }

  const blob = await response.blob();

  return new NextResponse(blob, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Vinay-resume.pdf"',
    },
  });
}

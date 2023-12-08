import connectMongoDB from '@/libs/mongodb'
import Review from '@/models/review'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, description } = await request.json()
  await connectMongoDB()
  await Review.create({ title, description })
  return NextResponse.json({ message: '리뷰가 등록되었습니다' }, { status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const reviews = await Review.find()
  return NextResponse.json({ reviews })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Review.findByIdAndDelete(id)
  return NextResponse.json({ message: '리뷰가 삭제되었습니다' }, { status: 200 })
}

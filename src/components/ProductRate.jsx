'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function ProductRate() {
  const router = useRouter()

  const navigateToAddReview = () => {
    router.push('/addReview')
  }
  const navigatetoreview = () => {
    router.push('/reviewlist')
  }

  return (
    <>
      <div className="flex text-center flex-col">
        <button
          onClick={navigateToAddReview}
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        >
          리뷰 등록하기
        </button>
      </div>

      <div className="flex text-center flex-col ">
        <button
          onClick={navigatetoreview}
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        >
          리뷰 목록으로{' '}
        </button>
      </div>
    </>
  )
}

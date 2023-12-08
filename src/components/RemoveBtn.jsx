'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function RemoveBtn({ id }) {
  const router = useRouter()

  const removeReview = async () => {
    const confirmed = confirm(`Are you sure to delete ${id}`)
    if (confirmed) {
      const res = await fetch(`/api/reviews?id=${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        router.refresh()
      }
    }
  }

  return (
    <button onClick={removeReview} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  )
}

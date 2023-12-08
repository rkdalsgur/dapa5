'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddReview() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert('리뷰를 등록해주세요')
    }
    try {
      const res = await fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (res.ok) {
        router.push('/')
        router.refresh()
      } else {
        throw new Error('리뷰를 등록하는 데 실패하였습니다')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
           {' '}
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 p-4"
        type="text"
        placeholder="Review Title"
      />
           {' '}
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 p-4 h-32"
        type="text"
        placeholder="Review Description"
      />
           {' '}
      <button
        type="submit"
        className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md"
      >
                리뷰 추가하기      {' '}
      </button>
    </form>
  )
}

// import AddReviewForm from '@/components/AddReviewForm'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '../api/auth/[...nextauth]/route'
// import { redirect } from 'next/navigation'

// export default async function AddReviewPage() {
//   const session = await getServerSession(authOptions)

//   if (!session) {
//     redirect('/signIn')
//   }

//   return <AddReviewForm />
// }
//위에꺼 아래꺼 따로임
// export default function AddReview() {
//   return (
//     <form className="flex flex-col gap-3">
//       <input
//         className="border border-slate-500 p-4"
//         type="text"
//         placeholder="Review Title"
//       />
//       <textarea
//         className="border border-slate-500 p-4 h-32"
//         type="text"
//         placeholder="Review Description"
//       ></textarea>
//       <button className="bg-blue-800 text-white font-bold px-6 py-3 w-fit rounded-md">
//         리뷰 추가하기
//       </button>
//     </form>
//   )
// }

import RemoveBtn from './RemoveBtn'

const getReviews = async () => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/reviews`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch reviews')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function ReviewList() {
  const { reviews } = await getReviews()

  return (
    <>
      {reviews.map((review) => (
        <div
          key={review._id}
          className="bg-slate-100 border borderlslate-300 p-4 my-3 flex justify-between items-start"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-900">{review.title}</h2>
            <div>{review.description}</div>
            <div className="flex gap-4 mt-2">
              <p>Created: {review.createdAt} </p>
              <p>Updated: {review.updatedAt} </p>
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={review._id} />
          </div>
        </div>
      ))}
    </>
  )
}

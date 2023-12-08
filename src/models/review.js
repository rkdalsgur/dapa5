import mongoose, { Schema } from 'mongoose'

const reviewSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema)

export default Review

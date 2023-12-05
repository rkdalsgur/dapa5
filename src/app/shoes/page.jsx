import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'

export default function Home() {
  const { products } = data

  // id가 '1'에서 '5' 사이인 제품만 필터링
  const filteredProducts = products.filter((product) => {
    const productId = parseInt(product.id, 10) // 문자열을 숫자로 변환
    return productId >= 11 && productId <= 15
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

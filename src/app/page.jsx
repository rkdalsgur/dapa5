import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div
      className="container mx-auto text-center bg-cover"
      style={{ backgroundImage: 'url("/your-background-image.jpg")' }}
    >
      {/* 환영 문구 */}
      <h1 className="text-4xl font-bold text-white mt-8 mb-4">
        환영합니다! 최신 트렌드를 쇼핑하세요.
      </h1>

      {/* 가운데 큰 이미지 */}
      <div className="mb-8">
        <Image
          src="/your-center-image.jpg"
          width={800}
          height={400}
          alt="Center Image"
          className="rounded shadow object-cover w-full"
        />
      </div>

      {/* 인기 상품 목록 */}
      <h2 className="text-2xl font-bold text-white mb-4">인기 상품</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        <ProductItem id="1" name="상품 1" image="/product1.jpg" price="19.99" />
        <ProductItem id="2" name="상품 2" image="/product2.jpg" price="24.99" />
        <ProductItem id="3" name="상품 3" image="/product3.jpg" price="29.99" />
        {/* 추가적인 상품들을 필요에 따라 추가하세요 */}
      </div>
    </div>
  )
}

function ProductItem({ id, name, image, price }) {
  return (
    <div className="card">
      <Link href={`/product/${id}`}>
        <Image
          src={image}
          width={400}
          height={400}
          alt={name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${id}`}>
          <h2 className="text-lg font-bold">{name}</h2>
        </Link>
        <p>${price}</p>
      </div>
    </div>
  )
}

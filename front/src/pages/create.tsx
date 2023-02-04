import { SearchBox, Location } from '@/components/SearchBox'
import Link from 'next/link'
import { useState } from 'react'

const create = () => {
  const [name, setName] = useState<string>()
  const [address, setAddress] = useState<string>()
  const [location, setLocation] = useState<Location>()
  const [url, setUrl] = useState<string>()

  return (
    <>
      <Link href="/list">/list</Link>

      <SearchBox
        placeholder={'場所を入力'}
        setName={setName}
        setAddress={setAddress}
        setLocation={setLocation}
        setUrl={setUrl}
      />
      <div>createページ</div>
      <div>{name}</div>
      <div>{address}</div>
      <div>
        {location?.lat}, {location?.lng}
      </div>
      <div>{url}</div>
    </>
  )
}

export default create

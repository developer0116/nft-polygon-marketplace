import '../styles/globals.css';
import Link from 'next/link';
function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold text-red-700'>Metaverse Marketplace</p>
        <div className='flex mt-4'>
          <Link href='/'>
            <a className='mr-6 text-yellow-600'>
              Home
            </a>
          </Link>
          <Link href='/create-item'>
            <a className='mr-6 text-yellow-600'>
              Sell NFTs
            </a>
          </Link>
          <Link href='/my-assets'>
            <a className='mr-6 text-yellow-600'>
              My NFTs
            </a>
          </Link>
          <Link href='/creator-dashboard'>
            <a className='mr-6 text-yellow-600'>
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
export default Marketplace
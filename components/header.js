import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

export default function Header ({ hideAbout }) {

  return (
    <header>
      <div className="header-block--flex">
        <Link href="/">
          <span className="header--logo">
            <Image src="/logo.svg" alt="dRoyson logo" height={40} width={100}></Image>
          </span>
        </Link>
        {!hideAbout && <Link href="/about">
          <span className="header--link">About me</span>
        </Link>}
      </div>
      <style jsx>{`
        header {
          height: 48px;
          padding: 4px 20px;
          box-shadow: 0 1px 4px 0px #00000055;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          background-color: #f0f8ff;
        }

        .header-block--flex {
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          height: 100%;
          max-width: 700px;
          margin: auto;
        }

        .header--logo {
          height: 40px;
          cursor: pointer;
        }

        .header--link {
          font-size: 1.2rem;
          text-decoration: none;
          color: #3366cc;
          cursor: pointer;
        }
      `}</style>
    </header>
  )
}

Header.propTypes = {
  hideAbout: PropTypes.bool
}

Header.defaultProps = {
  hideAbout: false
}

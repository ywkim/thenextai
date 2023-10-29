import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
      data-is-root-path={isRootPath}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <header className="px-4 py-5 bg-white shadow rounded-lg sm:px-6 lg:px-8 mb-8">
          {header}
        </header>
        <div className="relative px-4 py-5 bg-white shadow rounded-lg sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
      <footer className="fixed inset-x-0 bottom-0 h-12 flex items-center justify-center bg-white shadow">
        © {new Date().getFullYear()}, 함께 성장하는 인공지능, The Next AI
      </footer>
    </div>
  )
}

export default Layout

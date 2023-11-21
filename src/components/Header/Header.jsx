import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
  {
    name: "All Posts",
    slug: "/all-posts",
    active: true,
  },
  {
    name: "Add Post",
    slug: "/add-post",
    active: authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-black text-white rounded-3xl'>
      <Container>
        <nav className='flex justify-between'>
          
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='40px'   />
            </Link>
          </div>

          <div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 hover:text-black hover:bg-white hover:rounded-3xl'
                >{item.name}</button>
              </li>
            ) : null
            )}
          </ul>
          </div>

          {
            authStatus ? (
              <div>
                <LogoutBtn />
              </div>
            ) : (
              <div onClick={() => navigate("/login")}
              className='cursor-pointer inline-bock px-6 py-2 duration-200 hover:text-white rounded-full hover:bg-blue-500 hover:rounded-3xl'
              >
                Login
              </div>
            )
          }

            {/* {authStatus && (
              <div>
                <LogoutBtn />
              </div>
            )} */}


        </nav>
        </Container>
    </header>
  )
}

export default Header
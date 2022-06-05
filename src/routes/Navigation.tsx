import { Suspense } from 'react';
import { BrowserRouter ,Navigate,NavLink, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';

const Navigation = () => {
  return (
<Suspense fallback={null}>
    <BrowserRouter>
    <div className='main-layout'>    
    {/* Rutas dinámicas */}
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
              {
                  routes.map((route) => (
                      <li key={route.name}>
                        <NavLink to={route.to} className={({isActive}) => isActive? 'nav-active' : ''}>{route.name}</NavLink>
                      </li>
                  ))
              }
          </ul>
        </nav>
        {/* Rutas dinámicas */}

    <Routes>
        {
            routes.map(({name, path, Component}) => (
                <Route key={name} path={path} element={<Component />} />
            ))
        }
        <Route path='/*' element={<Navigate to={routes[0].to    } replace/>}/>
    </Routes>

    </div>
    </BrowserRouter>
</Suspense>
  )
}

export default Navigation
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png'
import { useBudgetMode } from "../context/BudgetContext";

export default function Header() {
  const { test, budgetMode, setBudgetMode } = useBudgetMode();

  console.log(test);


  return (
    <>
      <nav className="d-flex bg-dark text-light ps-4 align-items-center justify-content-between">
        <div className="header-right d-flex gap-2 py-3 ps-4 align-items-center">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link active' to='/about-us'>About us</NavLink>
          <NavLink className='nav-link' to='/products'>Products</NavLink>
          <button className="btn btn-outline-light" onClick={() => setBudgetMode(!budgetMode)}>Budget Mode: {budgetMode ? 'on' : 'off'}</button>
        </div>
        <div className="header-left pe-4">
          <a href="#" className='text-light'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart me-2" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg></a>
          <a href="#" className='text-danger'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg></a>
        </div>
      </nav>
    </>
  )
}
import React from 'react'
import {Link, } from 'react-router-dom'

function Aheader() {
  return (
<>
  <div>
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Google Fonts */}
  <link href="https://fonts.gstatic.com" rel="preconnect" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
  <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
</div>

{/* ======= Header ======= */}
<header id="header" className="header fixed-top d-flex align-items-center">
  <div className="d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center">
      <img src="assets/img/logo.png" alt="/" />
      <span className="d-none d-lg-block">NiceAdmin</span>
    </a>
    <i className="bi bi-list toggle-sidebar-btn" />
  </div>
  {/* End Logo */}
  <div className="search-bar">
    <form className="search-form d-flex align-items-center" method="POST" action="#">
      <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
      <button type="submit" title="Search"><i className="bi bi-search" /></button>
    </form>
  </div>
  {/* End Search Bar */}
  <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
      <li className="nav-item d-block d-lg-none">
        <a className="nav-link nav-icon search-bar-toggle " href="/">
          <i className="bi bi-search" />
        </a>
      </li>
      {/* End Search Icon*/}
      <li className="nav-item dropdown pe-3">
        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
          <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
          <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
        </a>
        {/* End Profile Iamge Icon */}
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>Kevin Anderson</h6>
            <span>Web Designer</span>
          </li>
        </ul>
        {/* End Profile Dropdown Items */}
      </li>
      {/* End Profile Nav */}
    </ul>
  </nav>
  {/* End Icons Navigation */}
</header>

{/* End Header */}
<aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
   
  <li class="nav-item">
        <Link class="nav-link " to="/admin">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </Link>
      </li>
  <li class="nav-item">
        <Link class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/Add_categoiries">
          <i class="bi bi-menu-button-wide"></i><span>Add_categories</span>
        </Link>
      </li>
  <li class="nav-item">
        <Link class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/Add_product">
          <i class="bi bi-menu-button-wide"></i><span>Add_product</span>
        </Link>
      </li>
  <li class="nav-item">
        <Link class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/Manage_categoriesge">
          <i class="bi bi-menu-button-wide"></i><span>Manage_categories</span>
        </Link>
      </li>
  <li class="nav-item">
        <Link class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/Manage_product">
          <i class="bi bi-menu-button-wide"></i><span>Manage_product</span>
        </Link>
      </li>

  <li class="nav-item">
        <Link class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/Manage_user">
          <i class="bi bi-menu-button-wide"></i><span>manage user</span>
        </Link>
      </li>
  <li class="nav-item">
        <Link class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/Alogin">
          <i class="bi bi-menu-button-wide"></i><span>lOGIN</span>
        </Link>
      </li>
          
  </ul>

  </aside>



</>
  

  )
}

export default Aheader
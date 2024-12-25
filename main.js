// navbar start
document.querySelector("nav").innerHTML+=`
<nav class="navbar navbar-expand-lg bg-light shadow" style="border: 1px solid #e0e0e0;">
  <div class="container-fluid">
    <a class="navbar-brand" href="home.html">
      <img src="images/logo pic/pic1.png" class="card logo bg-light" alt="Travel Ismart">
    </a>

    <!-- Navbar Toggle Button for Smaller Screens -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link navcontent" href="home.html">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle navcontent" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trip Catalog
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item dropanchor" href="destination.html">Destination</a></li>
            <li><a class="dropdown-item dropanchor" href="transportation.html">Transportation</a></li>
            <li><a class="dropdown-item dropanchor" href="accomodation.html">Accommodation</a></li>
            <li><a class="dropdown-item dropanchor" href="sort country.html">Sort by Country</a></li>
            <li><a class="dropdown-item dropanchor" href="sort activity.html">Sort by Activity</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link navcontent" href="about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navcontent" href="tour review.html">Tour Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navcontent" href="contactus.html">Contact Us</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;
// navbar end


// footer start
document.querySelector("footer").innerHTML+=`
<footer class="bg-dark text-light py-4">
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <h5>Travel Smart</h5>
                  <p>Your trusted travel partner. Explore the world with us and make unforgettable memories!</p>
              </div>
              <div class="col-md-4">
                  <h5>Quick Links</h5>
                  <ul class="list-unstyled">
                      <li><a href="home.html" class="text-light">Home</a></li>
                      <li><a href="destination.html" class="text-light">Destinations</a></li>
                      <li><a href="about.html" class="text-light">About</a></li>
                      <li><a href="contactus.html" class="text-light">Contact Us</a></li>
                  </ul>
              </div>
              <div class="col-md-4">
                  <h5>Follow Us</h5>
                  <div class="social-icons">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-youtube"></i></a>
                  </div>
              </div>
          </div>
          <hr class="my-4">
          <div class="text-center">
              <p>&copy; 2024 Travel Ismart. All rights reserved.</p>
          </div>
      </div>
  </footer>
`;
// footer end
<?php
include "./components/header.php";
?>


    <main class="page-wrapper">
        <div class="d-lg-flex position-relative h-100">

            <!-- Home button -->
            <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="./" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home" aria-label="Back to home">
                <i class="ai-home"></i>
            </a>

            <!-- Sign up form -->
            <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
                <div class="w-100 mt-auto" style="max-width: 526px;">
                    <h1>Delete account</h1>
                    <p class="pb-3 mb-3 mb-lg-4">Fill all fields so we can get some info about you. And process your account for deletion.</p>
                    <form class="needs-validation" novalidate>
                        <div class="mb-4">
                            <div class="col">
                                <input class="form-control form-control-lg" type="text" placeholder="Full name" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="col">
                                <input class="form-control form-control-lg" type="email" placeholder="Email address" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="col">
                                <input class="form-control form-control-lg" type="tel" placeholder="Phone number" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <select class="form-select" id="select-input">
                                <option>Rider</option>
                                <option>Driver</option>
                            </select>
                        </div>
                        <div class="pb-4">
                            <div class="form-check my-2">
                            <input class="form-check-input" type="checkbox" id="terms">
                            <label class="form-check-label ms-1" for="terms">I agree to <a href="terms" target="_blank">Terms &amp; Conditions</a></label>
                            </div>
                        </div>
                        <button class="btn btn-lg btn-primary w-100 mb-4" type="submit">Continue</button>
                    </form>
                </div>

                <p class="nav w-100 fs-sm pt-5 mt-auto mb-5" style="max-width: 526px;"><span class="text-body-secondary">&copy; <script>document.write(new Date().getFullYear());</script> All rights reserved. Built by</span>
                <a class="nav-link fw-normal p-0 ms-1" href="https://webify.com.ng" target="_blank" rel="noopener">Webify</a></p>
            </div>


            <!-- Cover image -->
            <div class="w-50 bg-size-cover bg-repeat-0 bg-position-center" style="background-image: url(assets/img/herobg.jpg);"></div>
        </div>
    </main>

    <script src="assets/vendor/parallax-js/dist/parallax.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/aos/dist/aos.js"></script>

    <script src="assets/js/main.js"></script>
  </body>
</html>
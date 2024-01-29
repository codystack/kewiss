<?php
include "./components/header.php";
?>

    <main class="page-wrapper">
        <div class="d-lg-flex h-100">

            <button class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" onclick="history.back()" data-bs-toggle="tooltip" data-bs-placement="left" title="Go Back" aria-label="Go Back">
                <i class="ai-home"></i>
            </button>

            <div class="d-flex flex-column w-lg-50 pb-5 pt-5 h-100">
                <div class="w-100 px-5" style="position: relative; transform: translate(0, 70%);">
                    <h2 class="display-3 text-dark text-center">Download the <br class="d-none d-xxl-inline">Rider app</h2>

                    <div class="col pb-sm-3 pt-5 py-md-0 py-lg-5" data-aos="fade-up" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="lg">
                        <div class="d-flex flex-column flex-sm-row justify-content-center">
                            <a class="btn btn-dark btn-lg px-3 py-2 me-sm-3 mb-3 mb-sm-0" href="#">
                                <img class="mx-1" src="assets/img/market/appstore-light.svg" width="136" alt="App Store">
                            </a>
                            <a class="btn btn-dark btn-lg px-3 py-2" href="#">
                                <img class="mx-1" src="assets/img/market/googleplay-light.svg" width="135" alt="Google Play">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-lg-50 h-100 bg-dark pb-5 pt-5 h-100">
                <div class="w-100 px-5" style="position: relative; transform: translate(0, 70%);">
                    <h2 class="display-3 text-center" style="color: #a7e92f">Download the <br class="d-none d-xxl-inline">Driver app</h2>

                    <div class="col pb-sm-3 pt-5 py-md-0 py-lg-5" data-aos="fade-up" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="lg">
                        <div class="d-flex flex-column flex-sm-row justify-content-center">
                            <a class="btn btn-lg px-3 py-2 me-sm-3 mb-3 mb-sm-0" href="#" style="background-color: #a7e92f">
                                <img class="mx-1" src="assets/img/market/appstore-dark.svg" width="136" alt="App Store">
                            </a>
                            <a class="btn btn-light btn-lg px-3 py-2" href="#" style="background-color: #a7e92f">
                                <img class="mx-1" src="assets/img/market/googleplay-dark.svg" width="135" alt="Google Play">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <script src="assets/vendor/parallax-js/dist/parallax.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/aos/dist/aos.js"></script>

    <script src="assets/js/main.js"></script>

  </body>
</html>
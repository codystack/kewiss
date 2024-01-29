<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
  <head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover">

    <title>Kewiss Ride&trade; :: Classy Rides, Every Time</title>
    <meta name="description" content="Kewiss Ride is more than just a ride-hailing app. We're a tech-powered ecosystem that seamlessly connects riders with a diverse fleet of transportation options. Need a quick zip across town? Our comfortable cars and experienced drivers are ready to whisk you away. Craving a touch of luxury? Opt for our premium car selections, where every ride feels like a first-class experience.">
    <meta name="keywords" content="ride hailing, bolt, uber, indrive, palm drive, taxi, ride, e-taxi, ">
    <meta name="author" content="Webify.com.ng">

    <link rel="manifest" href="manifest.json">
    <link rel="icon" type="image/png" href="assets/img/favicon.png" sizes="32x32">
    <link rel="apple-touch-icon" href="assets/img/favicon.png">

    <!-- Import Google font (Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" id="google-font">

    <link rel="stylesheet" media="screen" href="assets/vendor/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" media="screen" href="assets/vendor/aos/dist/aos.css">

    <link rel="stylesheet" href="assets/icons/around-icons.min.css">

    <link rel="stylesheet" media="screen" href="assets/css/style.css">
    <link rel="stylesheet" media="screen" href="assets/fonts/stylesheet.css">

    <!-- Page loading styles -->
    <style>
        .page-loading {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: all .4s .2s ease-in-out;
        transition: all .4s .2s ease-in-out;
        background-color: #fff;
        opacity: 0;
        visibility: hidden;
        z-index: 9999;
      }
      [data-bs-theme="dark"] .page-loading {
        background-color: #121519;
      }
      .page-loading.active {
        opacity: 1;
        visibility: visible;
      }
      .page-loading-inner {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        text-align: center;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-transition: opacity .2s ease-in-out;
        transition: opacity .2s ease-in-out;
        opacity: 0;
      }
      .page-loading.active > .page-loading-inner {
        opacity: 1;
      }
      .page-loading-inner > span {
        display: block;
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: normal;
        color: #6f788b;
      }
      [data-bs-theme="dark"] .page-loading-inner > span {
        color: #fff;
        opacity: .6;
      }
      .page-spinner {
        display: inline-block;
        width: 2.75rem;
        height: 2.75rem;
        margin-bottom: .75rem;
        vertical-align: text-bottom;
        background-color: #d7dde2; 
        border-radius: 50%;
        opacity: 0;
        -webkit-animation: spinner .75s linear infinite;
        animation: spinner .75s linear infinite;
      }
      [data-bs-theme="dark"] .page-spinner {
        background-color: rgba(255,255,255,.25);
      }
      @-webkit-keyframes spinner {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        50% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @keyframes spinner {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        50% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
    </style>

    <!-- Page loading scripts -->
    <script>
      (function () {
        window.onload = function () {
          const preloader = document.querySelector('.page-loading')
          preloader.classList.remove('active')
          setTimeout(function () {
            preloader.remove()
          }, 1500)
        }
      })()
    </script>

  </head>


  <!-- Body -->
  <body>

    <!-- Page loading spinner -->
    <div class="page-loading active">
      <div class="page-loading-inner">
        <div class="page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
<?php
include "./components/header.php";
include "./components/navbar_alt.php";
?>

    <main class="page-wrapper">
        <section class="jarallax bg-dark py-5" data-jarallax data-speed="0.6" data-bs-theme="dark">
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
            <div class="jarallax-img" style="background-image: url(assets/img/safetybg.jpg);"></div>
            <div class="container position-relative z-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">

                <div class="d-none d-xxl-block" style="height: 170px;"></div>
                <div class="d-none d-lg-block d-xxl-none" style="height: 120px;"></div>
                <div class="d-none d-md-block d-lg-none" style="height: 80px;"></div>
                <div class="d-md-none" style="height: 40px;"></div>
                <h1 class="display-2 mb-4">We are commited<br>to safety</h1>
                <p class="text-body" style="max-width: 680px;">Imagine a world where movement ignites possibilities, not anxieties. Where every corner of your city hums with the promise of connection, adventure, and effortless exploration. Kewiss Ride isn't just a ride-hailing app; it's your key to unlocking that world.</p>
                <p class="text-body mb-0" style="max-width: 680px;">We believe in movement unbound by fear, fueled by the confidence that safety underpins every step. That's why Kewiss Ride champions safety as a cornerstone of our journey together.</p>

            </div>
        </section>

        <section class="container py-5 my-sm-2 my-md-4 my-lg-5">
            <h2 class="h1 text-center pt-sm-3 mt-xxl-3 mx-auto" style="max-width: 40rem;">What do you get with our tool?</h2>
            <p class="fs-lg text-center pb-3 mb-lg-4 mx-auto" style="max-width: 30rem;">Make sure all your tasks are organized so you can set the priorities and focus on important.</p>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3 gy-sm-4 gy-xl-5 gx-4 gx-md-5 pb-xxl-4 mb-sm-2 mb-lg-0 mb-xl-2">
                <div class="col">
                    <div class="text-center px-xxl-4">
                        <img src="./assets/icons/support.gif" alt="support" width="100">
                        <h3 class="h4 mb-2">24/7 Customer Support</h3>
                        <p>Whether you have a quick question or an incident to report, it’s easy to get the help you need. Access 24/7 support directly through the app, whenever you need it.</p>
                    </div>
                </div>

            <div class="col">
                <div class="text-center px-xxl-4">
                    <img src="./assets/icons/location.gif" alt="location" width="100">
                    <h3 class="h4 mb-2">Share Trip Details</h3>
                    <p>Let the people you love know where you are. Choose your Trusted Contacts in the app and set reminders to share your trip details with them.</p>
                </div>
            </div>

            <div class="col">
                <div class="text-center px-xxl-4">
                    <img src="./assets/icons/rating.gif" alt="rating" width="100">
                    <h3 class="h4 mb-2">2-way Ratings</h3>
                    <p>Your feedback matters. The two-way rating system maintains an enjoyable kewiss experience and helps keep riders and drivers safe.</p>
                </div>
            </div>
            <div class="col">
                <div class="text-center px-xxl-4">
                    <img src="./assets/icons/emergency.gif" alt="Emergency" width="100">
                    <h3 class="h4 mb-2">Emergency Assist</h3>
                    <p>Quickly and discreetly alert an emergency response team with our in-app Emergency Assist button. This will also notify our Safety team.</p>
                </div>
            </div>
                <div class="col">
                    <div class="text-center px-xxl-4">
                        <img src="./assets/icons/driver.gif" alt="Driver Safety" width="100">
                        <h3 class="h4 mb-2">Driver Safety</h3>
                        <p>You can ask riders to confirm your name too. You could ask, “Hi, who is your driver?” or “Can you please confirm my name? It should be displayed on your app.”</p>
                    </div>
                </div>

                <div class="col">
                    <div class="text-center px-xxl-4">
                        <img src="./assets/icons/verification.gif" alt="verififcation" width="100">
                        <h3 class="h4 mb-2">Identity Verification</h3>
                        <p>A due diligence is carried out on our drivers as part of our identity verification process during registration, as well as on a regular basis.</p>
                    </div>
                </div>
            </div>
        </section>

        <?php include "./components/downloadcta.php"; ?>
    </main>


<?php include "./components/footer.php"; ?>
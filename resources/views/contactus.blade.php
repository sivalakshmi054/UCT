<!DOCTYPE html>
<html lang="en">


@include('header_css_js') 

<body ng-app="HROBController" ng-controller="MailController">

  <!-- ======= Header ======= -->

  @include('nav')
  <!-- End Header -->
  
  <!---======================= social icon ==================-->

  @include('socialicon')
  
  
<!---============================== model box =================-->


@include('modelbox')


  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <ol>
          <li><a href="index">Home</a></li>
          <li>Contact Us</li>
        </ol>
        <h2>Contact Us</h2>

      </div>
    </section><!-- End Breadcrumbs -->

    <section class="inner-page contact" id="contact">
      <div class="container" data-aos="fade-up">
        <!-- ======= Contact Section ======= -->

        <header class="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-6">

            <div class="row gy-4">
              <!--<div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street,<br>New York, NY 535022</p>
                </div>
              </div>-->
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+91 98220 33936<br></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@authyn.com<br></p>
                </div>
              </div>
              <!--<div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br>9:00AM - 05:00PM</p>
                </div>
              </div>-->
            </div>

          </div>

          <div class="col-lg-6">
            <form>
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" ng-model="name" class="form-control" placeholder="Your Name" required>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" ng-model="email" placeholder="Your Email" required>
                </div>

                <div class="col-md-6">
                  <input type="text" class="form-control" ng-model="phone" placeholder="Mobile" required>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" ng-model="subject" placeholder="Subject" required>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" ng-model="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div class="col-md-12 text-center">

                  <button type="submit" ng-click="Mail_send()">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div><!-- End Contact Section -->
      </div>
    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->

  @include('footer')
  @include('footer_js')
  
  <!-- End Footer -->


</body>

</html>
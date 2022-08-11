<!-- Modal HTML -->
<div id="modalCenter" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <!-- <div class="modal-header ">
                <h5 class="modal-title" style="text-center">schedule your demo!</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div> -->
            <div class="modal-header">
                <!--<h5 class="modal-title" id="head_modal">lets get this started</h5>-->
                <h5 class="modal-title" id="exampleModalLabel">Schedule your demo!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <!-- ======= Contact Section ======= -->

                <div class="col-lg-12 inner-page contact">

                    <form class="php-email-form border-round">
                        <div class="row gy-4">

                            <div class="col-md-12">
                                <label for="name"><strong>Name * </strong></label>
                                <input type="text" ng-model="name" class="form-control" placeholder="Your Name" required>
                            </div>

                            <div class="col-md-12">
                                <label for="email"><strong>Work Email * </strong></label>
                                <input type="email" class="form-control" ng-model="email" placeholder="Enter Your Work E-Mail" required>
                            </div>
                            <div class="col-md-12">
                                <label for="name"><strong>Number of Employees * </strong></label>
                                <select ng-model="empgroup" class="form-select" required>
                                    <option value="">Select one</option>
                                    <option value="0-500">1-500 employees </option>
                                    <option value="500-1,000">500-1000 employees </option>
                                    <option value="1,001-3,000">1001-3000 employees </option>
                                    <option value="3,001-5,000">3001-5000 employees </option>
                                    <option value="Above 5,001">Above 5001 employees</option>
                                </select>
                            </div>

                            <div class="col-md-12 text-center">

                                <button ng-click="Requirment_send()" class="block">Request a demo</button>
                            </div>
                            <p class="bottom-content">
                                * We don’t share your personal info with anyone.</br>
                                Check out our <a href="privacy_policy">Privacy Policy</a> for more information.
                            </p>
                        </div>
                    </form>

                </div><!-- End Contact Section -->
            </div>
            <!--<div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">OK, Got it!</button>
                </div>-->
        </div>
    </div>
</div>
<template>
  <div class="site-section" data-aos="fade">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="row mb-5">
            <div class="col-12">
              <h2 class="site-section-heading text-center animated fadeIn slow">Contact Us</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-8 mb-5">
              <form name="contact" method="POST" data-netlify="true">
                <div class="row form-group animated slideInLeft">
                  <div class="col-md-12">
                    <label class="text-black" for="naming">Name</label>
                    <input type="text" name="naming" class="form-control" required />
                  </div>
                </div>
                <div class="row form-group animated slideInRight">
                  <div class="col-md-12">
                    <label class="text-black" for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-control" required />
                  </div>
                </div>

                <div class="row form-group animated slideInLeft">
                  <div class="col-md-12">
                    <label class="text-black" for="subject">Subject</label>
                    <input type="subject" name="subject" id="subject" class="form-control" required />
                  </div>
                </div>
                <div class="row form-group animated slideInRight">
                  <div class="col-md-12">
                    <label class="text-black" for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Write your notes or questions here..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div data-netlify-recaptcha="true"></div>

                <div class="row form-group animated slideInLeft">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary py-2 px-4 text-white">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-3 ml-auto animated slideInDown">
              <div class="mb-3 bg-white">
                <p class="mb-0 font-weight-bold">Address</p>
                <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                <p class="mb-0 font-weight-bold">Phone</p>
                <p class="mb-4">
                  <a href="#">+1 232 3235 324</a>
                </p>

                <p class="mb-0 font-weight-bold">Email Address</p>
                <p class="mb-0">
                  <a href="#">youremail@domain.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Phtography || Contact Us ",
      meta: [
        {
          hid: "Adane fouham",
          name: "Adane fouham",
          content: "Adane fouham"
        }
      ]
    };
  }
};
</script>

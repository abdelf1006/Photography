<template>
  <div class="site-section" data-aos="fade">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="row mb-5">
            <div class="col-12">
              <h2 class="site-section-heading text-center">Contact Us</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-8 mb-5">
              <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>
                    Your Name:
                    <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Your Email:
                    <input type="email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    Your Role:
                    <select name="role[]" multiple>
                      <option value="leader">Leader</option>
                      <option value="follower">Follower</option>
                    </select>
                  </label>
                </p>
                <p>
                  <label>
                    Message:
                    <textarea name="message"></textarea>
                  </label>
                </p>
                <div data-netlify-recaptcha="true"></div>

                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
            <div class="col-lg-3 ml-auto">
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

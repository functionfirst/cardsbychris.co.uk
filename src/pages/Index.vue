<template>
  <Layout>
    <div class="relative bg-white overflow-hidden ">
      <div class="max-w-screen-xl mx-auto ">
        <div
          class="relative z-10 pb-8 bg-white h-screen sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a
                    href="#"
                    aria-label="Home"
                    class="flex items-center text-teal-600"
                  >
                    <logo-text class="w-auto h-16 mr-2" />
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <main
            class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                Welcome to Cards by Chris.
                <span class="text-teal-600"
                  >Hand-crafted cards for all occasions
                </span>
              </h2>

              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                I'll be up and running soon with my brand new website where
                you'll be able to order personalised and hand-crafted cards and
                memory journals.
              </p>

              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                In the meantime why not visit my Facebook page to see some of my
                work
              </p>

              <div class="mt-5 sm:mt-8 flex justify-center">
                <div class="rounded-md shadow">
                  <a
                    href="https://www.facebook.com/Cards-by-Chris-112267860499250/"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <facebook
                      class="text-teal-500 bg-white rounded w-8 h-8 pt-1 pl-1 flex items-center justify-center mr-2"
                    />
                    Visit us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <g-image
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="~/assets/images/bg.jpg"
          width="950"
          alt="A montage image of various cards and crafts"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Cards by Chris',
  },

  components: {
    Facebook: () => import('~/components/icons/Facebook'),
    LogoText: () => import('~/components/LogoText'),
  },
};
</script>

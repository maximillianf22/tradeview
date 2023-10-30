<template>
  <div class="flex flex-col lg:flex-row mb-20">
    <div class="w-full lg:w-1/2">
      <div class="">
        <a href="/en" class="" aria-current="page">
          <NuxtImg
            src="https://tradeviewmena.com/_nuxt/img/logo_white.39795f1.svg"
            alt="Tradeview Ltd Logo"
            class="max-h-[60px] w-auto"
            height="60px"
          />
        </a>
      </div>
      <ul class="space-y-2 mt-5 font-light">
        <li class="lg:max-w-[60%]">
          <b class="font-medium">Tradeview Markets</b> | Grand Cayman, KY1-1002,
          4th Floor Harbour Place | 103 South Church St, PO Box 1105
        </li>
        <li><b class="font-medium">Main Office:</b> +1 345 945 6271</li>
        <li><b class="font-medium">Direct Phone:</b> +1 345 946 4532</li>
        <li>
          <b class="font-medium">Website:</b>
          <a href="http://www.tvmarkets.com" class="underline ml-2"
            >www.tvmarkets.com</a
          >
        </li>
      </ul>
      <div class="mb-10">
        <p class="mt-10 font-light uppercase tracking-[.25em] text-xs mb-4">
          Find us on:
        </p>
        <div class="flex text-2xl space-x-4">
          <a
            href="https://twitter.com/Tradeview_"
            target="_blank"
            id="twitter-link"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/TradeviewMarkets/"
            target="_blank"
            id="facebook-link"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/tradeview-forex/"
            target="_blank"
            id="linkedin-link"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/tradeviewmarkets/"
            target="_blank"
            id="instagram-link"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/user/tradeviewforex"
            target="_blank"
            id="youtube-link"
            aria-label="YouTube"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2">
      <div class="w-full p-5 lg:p-10 border-[#4d4e57] border-[3px]">
        <div class="flex flex-col lg:flex-row">
          <a
            href="https://surfsup.tradeviewforex.com/?__hstc=81638664.feda5e4a297474292dcce7c613eeb873.1697738200615.1698550222886.1698605516547.6&amp;__hssc=81638664.1.1698605516547&amp;__hsfp=1336771869"
            target="_blank"
            class="lg:border-r"
            id="subscribe-link"
            aria-label="Subscribe to Surf's Up"
          >
            <NuxtImg
              src="https://tradeviewmena.com/_nuxt/img/surfs-up-gray.980ff4e.svg"
              alt="Subscribe to Surf's Up"
              class="max-w-[200px] mx-auto lg:mr-10"
              width="200px"
            />
          </a>
          <p class="pr-0 lg:pl-10 my-auto font-light mt-5 lg:mt-0">
            Find daily trading insights and understand what is behind the latest
            waves in financial markets.
          </p>
        </div>
        <div class="flex mt-10">
          <input
            type="text"
            placeholder="Enter your email address"
            class="p-3 w-2/3 bg-transparent border border-[#6f7079] text-sm lg:text-md"
          />
          <button
            class="w-1/3 bg-[#4b4d5c] hover:bg-primary ml-5 text-sm lg:text-md"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div class="flex mt-10 justify-between">
        <ul
          class="hidden md:block font-light space-y-4 underline text-gray-400 text-md tracking-[.25em]"
        >
          <li>
            <a href="#">{{ $t("navbar.forex") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("navbar.stocks") }}</a>
          </li>
          <li><a href="#">TradeGATEHub</a></li>
          <li>
            <a href="#">{{ $t("topbar.markets") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("topbar.pricing") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("topbar.introducing-brokers") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("topbar.education") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("navbar.contact-us") }}</a>
          </li>
        </ul>
        <div>
          <ul class="font-light space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              <a href="#">{{ $t("topbar.accounts") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.open-account") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.individual") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.joint") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.corporate") }}</a>
            </li>
          </ul>
          <ul class="font-light mt-10 space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              <a href="#">{{ $t("footer.about-tradeview") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.our-story") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.our-team") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.our-vision") }}</a>
            </li>
          </ul>
          <ul class="font-light mt-10 space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              <a href="#">{{ $t("footer.company") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.why-tradeview") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.sponsorships") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.press") }}</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="font-light space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              <a href="#">{{ $t("footer.software") }}</a>
            </li>
            <li><a href="#">MetaTrader 4</a></li>
            <li><a href="#">MetaTrader 5</a></li>
            <li><a href="#">cTrader</a></li>
            <li><a href="#">cTraderCopy</a></li>
            <li><a href="#">cCurreneX</a></li>
          </ul>
          <ul class="font-light mt-10 space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              <a href="#">{{ $t("topbar.support") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.forms-documents") }}</a>
            </li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

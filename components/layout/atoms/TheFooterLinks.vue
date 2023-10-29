<template>
  <div class="flex flex-col lg:flex-row mb-20">
    <div class="w-full lg:w-1/2">
      <div class="">
        <a href="/en" class="" aria-current="page">
          <img
            src="https://tradeviewmena.com/_nuxt/img/logo_white.39795f1.svg"
            alt="Tradeview Ltd Logo"
            class="max-h-[60px] w-auto"
          />
        </a>
      </div>
      <ul class="space-y-2 mt-5 font-light">
        <li class="lg:max-w-[60%]">
          <b class="font-medium">Tradeview Markets</b> | Grand Cayman, KY1-1002,
          4th Floor Harbour Place | 103 South Church St, PO Box 1105
        </li>
        <li><b class="font-medium">Main Oﬃce:</b> +1 345 945 6271</li>
        <li><b class="font-medium">Direct Phone:</b> +1 345 946 4532</li>
        <li>
          <b class="font-medium">Website:</b>
          <a href="#" class="underline ml-2">www.tvmarkets.com</a>
        </li>
      </ul>
      <div class="mb-10">
        <p class="mt-10 font-light uppercase tracking-[.25em] text-xs mb-4">
          Find us on:
        </p>
        <div class="flex text-2xl space-x-4">
          <a href="https://twitter.com/Tradeview_" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/TradeviewMarkets/" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/tradeview-forex/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/tradeviewmarkets/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/user/tradeviewforex" target="_blank">
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
          >
            <img
              src="https://tradeviewmena.com/_nuxt/img/surfs-up-gray.980ff4e.svg"
              alt="Subscribe to Surf's Up"
              class="max-w-[200px] mx-auto lg:mr-10"
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
          <li>{{ $t("navbar.forex") }}</li>
          <li>{{ $t("navbar.stocks") }}</li>
          <li>TradeGATEHub</li>
          <li>{{ $t("topbar.markets") }}</li>
          <li>{{ $t("topbar.pricing") }}</li>
          <li>{{ $t("topbar.introducing-brokers") }}</li>
          <li>{{ $t("topbar.education") }}</li>
          <li>{{ $t("navbar.contact-us") }}</li>
        </ul>
        <div>
          <ul class="font-light space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              {{ $t("topbar.accounts") }}
            </li>
            <li>{{ $t("footer.open-account") }}</li>
            <li>{{ $t("footer.individual") }}</li>
            <li>{{ $t("footer.joint") }}</li>
            <li>{{ $t("footer.corporate") }}</li>
          </ul>
          <ul class="font-light mt-10 space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              {{ $t("footer.about-tradeview") }}
            </li>
            <li>{{ $t("footer.our-story") }}</li>
            <li>{{ $t("footer.our-team") }}</li>
            <li>{{ $t("footer.our-vision") }}</li>
          </ul>
          <ul class="font-light mt-10 space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              {{ $t("footer.company") }}
            </li>
            <li>{{ $t("footer.why-tradeview") }}</li>
            <li>{{ $t("footer.sponsorships") }}</li>
            <li>{{ $t("footer.press") }}</li>
          </ul>
        </div>
        <div>
          <ul class="font-light space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              {{ $t("footer.software") }}
            </li>
            <li>MetaTrader 4</li>
            <li>MetaTrader 5</li>
            <li>cTrader</li>
            <li>cTraderCopy</li>
            <li>cCurreneX</li>
          </ul>
          <ul class="font-light mt-10 space-y-4 text-gray-200 text-md">
            <li class="uppercase tracking-[.25em] text-gray-400">
              {{ $t("topbar.support") }}
            </li>
            <li></li>

            <li>{{ $t("footer.forms-documents") }}</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

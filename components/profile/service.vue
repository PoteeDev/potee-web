<template>
  <div class="flex w-full flex-col p-5 rounded-lg bg-[#282828]">
    <div class="flex w-full items-center gap-2">
      <div class="heading-300">{{ item?.name }}</div>
      <div
        :class="[
          'w-2.5 h-2.5 rounded-full',
          item && serviceClassByStatus[item.status],
        ]"
      />
    </div>

    <div class="body-400 text-[#B0B0B0] mt-1">
      {{ item?.description }}
    </div>
    <div class="text-[#B0B0B0] flex gap-6 items-center mt-2">
      <div class="flex gap-1.5 items-center mt-1 text-[#0FBF00]">
        <svg
          width="15"
          height="19"
          viewBox="0 0 15 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="18.0531"
            height="2.76106"
            rx="1.38053"
            transform="matrix(6.17102e-08 -1 -1 -3.09622e-08 14.4779 18.5132)"
            fill="#0FBF00"
          />
          <rect
            width="13.5398"
            height="2.76106"
            rx="1.38053"
            transform="matrix(4.01116e-08 -1 -1 -4.76342e-08 8.95575 18.5132)"
            fill="#0FBF00"
          />
          <rect
            width="9.02655"
            height="2.76106"
            rx="1.38053"
            transform="matrix(5.34822e-08 -1 -1 -3.57257e-08 3.43365 18.5132)"
            fill="#0FBF00"
          />
        </svg>
        {{ item?.reputation }}
      </div>

      <div class="flex gap-1 items-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.21805 15.0675L8.08453 25.4433L7.34168 26.0249C6.889 26.3792 6.65587 26.8131 6.74479 27.135C6.87794 27.6169 7.13765 27.5955 9.68909 26.8906C12.0032 26.2513 12.467 26.0438 12.3695 25.691C12.3047 25.4563 11.7526 25.1749 11.1426 25.0654L10.0334 24.8664L8.83945 20.5445L7.64553 16.2229L8.74385 16.1103C10.6176 15.9178 11.854 16.0281 15.1473 16.6815C19.0466 17.4554 20.1128 17.5394 22.1951 17.2361L23.8226 16.9991L22.3866 11.801L20.9505 6.60297L19.3253 6.87541C18.1501 7.0726 16.5059 6.93298 13.3883 6.37127C8.87897 5.55901 7.28078 5.45393 5.76427 5.87017C4.91118 6.10403 4.83735 6.05811 4.58232 5.13498C4.32325 4.19722 4.26354 4.16315 3.33088 4.42081L2.3515 4.69138L5.21805 15.0675Z"
            fill="#B0B0B0"
          />
          <circle cx="21.689" cy="16.3992" r="5.4487" fill="#282828" />
          <circle cx="22.0782" cy="16.7884" r="4.28112" fill="#B0B0B0" />
          <path
            d="M20.5214 16.3991L22.0782 17.9559L24.0242 15.6207"
            stroke="#282828"
            stroke-width="0.778386"
            stroke-linecap="round"
          />
        </svg>
        {{ item?.gained }}
      </div>

      <div class="flex gap-1 items-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.19153 15.0675L8.05801 25.4434L7.31516 26.025C6.86248 26.3793 6.62935 26.8132 6.71827 27.135C6.85142 27.617 7.11113 27.5955 9.66257 26.8906C11.9767 26.2513 12.4405 26.0439 12.343 25.691C12.2782 25.4564 11.7261 25.175 11.116 25.0655L10.0069 24.8665L8.81293 20.5446L7.61901 16.223L8.71733 16.1103C10.5911 15.9179 11.8275 16.0281 15.1207 16.6815C19.0201 17.4555 20.0863 17.5395 22.1686 17.2361L23.7961 16.9991L22.36 11.8011L20.924 6.60303L19.2988 6.87547C18.1235 7.07266 16.4794 6.93304 13.3618 6.37133C8.85245 5.55908 7.25426 5.45399 5.73775 5.87023C4.88466 6.10409 4.81083 6.05817 4.5558 5.13504C4.29673 4.19728 4.23702 4.16321 3.30436 4.42087L2.32498 4.69144L5.19153 15.0675Z"
            fill="#B0B0B0"
          />
          <circle cx="21.6624" cy="16.3993" r="5.4487" fill="#282828" />
          <circle cx="22.0516" cy="16.7884" r="4.28112" fill="#B0B0B0" />
          <path
            d="M20.6433 15.3441L23.4042 18.105"
            stroke="#282828"
            stroke-width="1.06195"
            stroke-linecap="round"
          />
          <path
            d="M23.4027 15.3456L20.6418 18.1066"
            stroke="#282828"
            stroke-width="1.06195"
            stroke-linecap="round"
          />
        </svg>

        {{ item?.lost }}
      </div>

      <div class="flex gap-1 items-center">
        <svg
          width="19"
          height="22"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.4232 0.165332C11.1931 0.253624 9.7497 0.928284 8.21569 1.66489C5.51361 2.96208 3.97151 3.53639 1.41166 4.19928L0.185852 4.51685L0.364355 7.25698C0.734748 12.9374 2.65644 18.1188 5.94006 22.2921C7.68967 24.5156 10.9588 27.3065 12.1977 27.6341C14.1732 28.1566 20.2521 21.6494 22.4655 16.6428C23.5337 14.227 24.4965 10.1437 24.7068 7.13898L24.8901 4.51657L23.6651 4.19928C21.1279 3.542 19.569 2.95143 16.8282 1.60855C14.1417 0.292304 12.3433 -0.187835 11.4232 0.165332Z"
            fill="#B0B0B0"
          />
        </svg>
        {{ item?.sla.toFixed(2) }}%
      </div>
    </div>

    <div class="w-full h-[1px] bg-[#1B1B1B] mt-3"></div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { Service } from "~/types";
import { serviceClassByStatus } from "~/shared";

export default defineComponent({
  name: "Service",
  props: {
    item: {} as PropType<Service>,
  },
  setup(props) {
    return {
      serviceClassByStatus,
    };
  },
});
</script>
<style lang=""></style>

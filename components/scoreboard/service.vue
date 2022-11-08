<template>
  <div
    :class="[
      'flex flex-col px-3 py-2 rounded-xl border-solid gap-2 h-full',
      serviceClassByStatus[item.status],
    ]"
  >
    <div class="flex justify-between">
      <div class="body-500">{{ name }}</div>
      <div class="body-500 flex gap-1 items-center">
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="14"
            height="2.21053"
            rx="1.10526"
            transform="matrix(5.52144e-08 -1 -1 -3.46048e-08 11.0527 14)"
            fill="white"
          />
          <rect
            width="10.5"
            height="2.21053"
            rx="1.10526"
            transform="matrix(4.14108e-08 -1 -1 -4.61398e-08 6.63159 14)"
            fill="white"
          />
          <rect
            width="7"
            height="2.21053"
            rx="1.10526"
            transform="matrix(5.52144e-08 -1 -1 -3.46048e-08 2.21069 14)"
            fill="white"
          />
        </svg>
        {{ item.reputation }}
      </div>
    </div>

    <div class="flex gap-3 items-center">
      <div class="flex gap-1 items-center">
        <svg
          width="26"
          height="27"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.91983 9.64454L4.76113 16.3095L4.28395 16.6831C3.99317 16.9107 3.84342 17.1894 3.90054 17.3961C3.98606 17.7057 4.15289 17.6919 5.79182 17.2392C7.27833 16.8285 7.57621 16.6952 7.5136 16.4686C7.47196 16.3179 7.11731 16.1371 6.72546 16.0668L6.01301 15.9389L5.24605 13.1627L4.47913 10.3867L5.18464 10.3144C6.38828 10.1908 7.18248 10.2616 9.2979 10.6813C11.8027 11.1784 12.4876 11.2324 13.8251 11.0375L14.8705 10.8853L13.9481 7.5463L13.0257 4.20732L11.9817 4.38232C11.2268 4.50899 10.1706 4.4193 8.16801 4.05849C5.27144 3.53673 4.24483 3.46923 3.27069 3.7366C2.7227 3.88682 2.67528 3.85732 2.51146 3.26435C2.34505 2.66197 2.30669 2.64008 1.7076 2.80559L1.07848 2.9794L2.91983 9.64454Z"
            fill="white"
          />
          <circle cx="13.4998" cy="10.5" r="3.5" fill="#282828" />
          <circle cx="13.75" cy="10.75" r="2.75" fill="white" />
          <path
            d="M12.75 10.5L13.75 11.5L15 10"
            stroke="#282828"
            stroke-width="1.0206"
            stroke-linecap="round"
          />
        </svg>

        {{ item.gained }}
      </div>
      <div class="flex gap-1 items-center">
        <svg
          width="26"
          height="27"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.92052 9.64689L4.76225 16.3134L4.28496 16.6871C3.99411 16.9148 3.84432 17.1935 3.90146 17.4003C3.98701 17.71 4.15387 17.6962 5.79319 17.2433C7.28005 16.8325 7.578 16.6993 7.51537 16.4726C7.47372 16.3218 7.11899 16.141 6.72705 16.0706L6.01443 15.9428L5.24729 13.1659L4.48019 10.3893L5.18586 10.3169C6.38979 10.1933 7.18418 10.2641 9.3001 10.6839C11.8055 11.1812 12.4905 11.2351 13.8284 11.0402L14.8741 10.8879L13.9514 7.54817L13.0287 4.20839L11.9845 4.38344C11.2294 4.51013 10.173 4.42043 8.16994 4.05953C5.27268 3.53764 4.24583 3.47013 3.27147 3.73756C2.72335 3.88782 2.67591 3.85831 2.51206 3.2652C2.3456 2.66268 2.30724 2.64079 1.708 2.80634L1.07874 2.98018L2.92052 9.64689Z"
            fill="white"
          />
          <circle cx="13.503" cy="10.5025" r="3.50083" fill="#282828" />
          <circle cx="13.7533" cy="10.7526" r="2.75065" fill="white" />
          <path
            d="M12.8484 9.82458L14.6223 11.5985"
            stroke="#282828"
            stroke-linecap="round"
          />
          <path
            d="M14.6213 9.82556L12.8474 11.5995"
            stroke="#282828"
            stroke-linecap="round"
          />
        </svg>

        {{ item.lost }}
      </div>

      <div class="flex gap-2 items-center">
        <svg
          width="18"
          height="20"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.36823 0.0636019C6.23783 0.113637 5.41988 0.49597 4.55055 0.913408C3.01926 1.64853 2.14535 1.974 0.694673 2.34966L0 2.52963L0.101158 4.08247C0.311062 7.30157 1.40009 10.2379 3.26093 12.6029C4.25244 13.863 6.10506 15.4446 6.80717 15.6303C7.92671 15.9264 11.3716 12.2387 12.626 9.40146C13.2314 8.0324 13.777 5.71838 13.8962 4.0156L14 2.52947L13.3058 2.34966C11.8679 1.97717 10.9845 1.64249 9.43128 0.881481C7.90884 0.135557 6.88967 -0.136539 6.36823 0.0636019Z"
            fill="white"
          />
        </svg>

        {{ item.sla.toFixed(2) }}%
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";
import { Service } from "~~/types";
import { serviceClassByStatus } from "~/shared";

export default defineComponent({
  name: "Service",
  props: {
    name: String,
    item: {
      type: Object as PropType<Service>,
      required: true,
    },
  },
  setup(props) {
    return { serviceClassByStatus };
  },
});
</script>
<style></style>

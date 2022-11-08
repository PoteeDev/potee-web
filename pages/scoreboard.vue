<template>
  <div v-if="!scoreboardError" class="flex flex-col gap-5 mt-12">
    <div v-if="!scoreboard.length" class="text-center">
      Рейтинговый список в данный момент отсутствует
    </div>
    <div
      v-if="scoreboard?.length"
      class="grid grid-cols-[100px_250px_1fr_190px] gap-5 items-center"
    >
      <div></div>
      <div class="place-self-start body-700-true">Name</div>
      <div class="place-self-start body-700-true">Services</div>
      <div class="place-self-start body-700-true">Score</div>
    </div>
    <div
      v-for="(item, key) in scoreboard"
      class="grid grid-cols-[100px_250px_1fr_190px] gap-5 items-center cursor-pointer"
      @click="() => useRouter().push('/profile/' + item.id)"
    >
      <div
        v-if="item.place > 3"
        class="place-self-center heading-800 w-min rounded-lg"
      >
        {{ item.place }}
      </div>
      <div class="place-self-center" v-if="item.place <= 3">
        <svg
          :width="cupSizes[item.place][0]"
          :height="cupSizes[item.place][1]"
          viewBox="0 0 45 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.53553 17.1528C2.02342 11.6583 0.681406 8.24889 0.322915 3.91111L0 0H22.0513H44.1026L43.7796 3.91111C43.4212 8.24889 42.0791 11.6583 38.567 17.1528C37.3219 19.1006 36.0023 21.5378 35.6351 22.5694C35.0445 24.2272 34.7386 24.4444 32.9926 24.4444C31.1799 24.4444 30.8433 24.7183 28.8927 27.7778L26.7675 31.1111H22.0513H17.3351L15.2099 27.7778C13.2592 24.7183 12.9226 24.4444 11.1099 24.4444C9.364 24.4444 9.05805 24.2272 8.4675 22.5694C8.10025 21.5378 6.78067 19.1006 5.53553 17.1528ZM10.8664 16.4406C10.6792 15.8578 10.2413 12.92 9.8938 9.91278L9.26165 4.44444H7.10468C4.96523 4.44444 4.95046 4.45944 5.29143 6.25C5.70082 8.39722 8.49705 14.1539 10.0821 16.1111C10.9392 17.1694 11.1258 17.2478 10.8664 16.4406ZM34.0205 16.1111C35.6055 14.1539 38.4017 8.39722 38.8111 6.25C39.1527 4.45667 39.1401 4.44444 36.9743 4.44444H34.7938L34.1798 9.92722C33.8421 12.9422 33.4152 15.88 33.2307 16.455C32.9811 17.2333 33.1826 17.1456 34.0205 16.1111ZM11.105 40V37.7778V35.5556H22.0513H32.9976V37.7778V40H22.0513H11.105ZM22.2457 7.21496L17.0175 9.82908L22.3927 12.666L27.9853 9.86968C27.968 9.85627 27.9491 9.8445 27.9289 9.83468L22.5319 7.21332C22.4415 7.16936 22.3357 7.16997 22.2457 7.21496ZM16.8291 16.1101V10.4619L22.0649 13.2252V19.2259L16.995 16.3927C16.8926 16.3355 16.8291 16.2274 16.8291 16.1101ZM27.9419 16.392L22.7125 19.2308V13.2301L28.1112 10.5308V16.1074C28.1112 16.2261 28.0462 16.3353 27.9419 16.392Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.53553 17.1528C2.02342 11.6583 0.681406 8.24889 0.322915 3.91111L0 0H22.0513H44.1026L43.7796 3.91111C43.4212 8.24889 42.0791 11.6583 38.567 17.1528C37.3219 19.1006 36.0023 21.5378 35.6351 22.5694C35.0445 24.2272 34.7386 24.4444 32.9926 24.4444C31.1799 24.4444 30.8433 24.7183 28.8927 27.7778L26.7675 31.1111H22.0513H17.3351L15.2099 27.7778C13.2592 24.7183 12.9226 24.4444 11.1099 24.4444C9.364 24.4444 9.05805 24.2272 8.4675 22.5694C8.10025 21.5378 6.78067 19.1006 5.53553 17.1528ZM10.8664 16.4406C10.6792 15.8578 10.2413 12.92 9.8938 9.91278L9.26165 4.44444H7.10468C4.96523 4.44444 4.95046 4.45944 5.29143 6.25C5.70082 8.39722 8.49705 14.1539 10.0821 16.1111C10.9392 17.1694 11.1258 17.2478 10.8664 16.4406ZM34.0205 16.1111C35.6055 14.1539 38.4017 8.39722 38.8111 6.25C39.1527 4.45667 39.1401 4.44444 36.9743 4.44444H34.7938L34.1798 9.92722C33.8421 12.9422 33.4152 15.88 33.2307 16.455C32.9811 17.2333 33.1826 17.1456 34.0205 16.1111ZM11.105 40V37.7778V35.5556H22.0513H32.9976V37.7778V40H22.0513H11.105ZM22.2457 7.21496L17.0175 9.82908L22.3927 12.666L27.9853 9.86968C27.968 9.85627 27.9491 9.8445 27.9289 9.83468L22.5319 7.21332C22.4415 7.16936 22.3357 7.16997 22.2457 7.21496ZM16.8291 16.1101V10.4619L22.0649 13.2252V19.2259L16.995 16.3927C16.8926 16.3355 16.8291 16.2274 16.8291 16.1101ZM27.9419 16.392L22.7125 19.2308V13.2301L28.1112 10.5308V16.1074C28.1112 16.2261 28.0462 16.3353 27.9419 16.392Z"
            fill="url(#paint0_linear_182_198)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_182_198"
              x1="0"
              y1="0"
              x2="39.0075"
              y2="43.4987"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1EC9FF" />
              <stop offset="1" stop-color="#FF35EA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        class="flex gap-4 bg-[#282828] p-4 rounded-lg h-full items-center"
        v-tooltip.top="item.id"
      >
        <span class="heading-400 text-ellipsis overflow-hidden">
          {{ item.id }}
        </span>
      </div>

      <div
        class="gap-2 flex p-2 bg-[#282828] h-full items-start rounded-lg overflow-auto"
      >
        <ServiceScoreboardItem
          v-for="(service, key) of item.srv"
          :item="service"
          :name="key"
        />
      </div>
      <div
        class="flex flex-col gap-3 items-center h-full bg-gradient-to-r from-[#1ecbffb3] to-[#ff35ebab] py-4 px-4 rounded-lg"
      >
        <div class="flex gap-2 items-center body-500">
          <svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.76229 4.26645L9.23347 0.0308598C9.3147 -0.00975813 9.4102 -0.0103071 9.4919 0.0293745L18.3415 4.32775L9.37399 8.81151L0.76229 4.26645ZM0 6.01252V15.2152C0 15.3211 0.0572734 15.4187 0.149714 15.4704L8.41225 20.0877V10.4523L0 6.01252ZM10.3123 20.1029L18.8471 15.4697C18.9413 15.4186 19 15.32 19 15.2128V6.12277L10.3123 10.4666V20.1029Z"
              fill="white"
            />
          </svg>

          {{ item.total_score }}
        </div>

        <div class="flex gap-4">
          <div class="flex gap-1 items-center body-500">
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

            {{ item.total_gained }}
          </div>

          <div class="flex gap-1 items-center body-500">
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

            {{ item?.total_lost }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    {{ scoreboardError }}
  </div>
</template>
<script lang="ts">
import { apiFetch } from "~~/composables";
import { Service } from "~/types";
import { serviceClassByStatus } from "~/shared";
import { AxiosError } from "axios";
import { ServiceScoreboardItem } from "~~/components/scoreboard";
import Tooltip from "primevue/tooltip";

const cupSizes = {
  1: [50, 45],
  2: [45, 40],
  3: [40, 35],
} as Record<number, [number, number]>;

interface ScoreboardResponse {
  scoreboard: ScoreboardItem[];
}

interface ScoreboardItem {
  id: string;
  srv: Record<string, Service>;
  total_score: number;
  total_gained: number;
  total_lost: number;
  place: number;
  last_place: number;
}
const errors = {} as Record<string, any>;

export default defineComponent({
  components: {
    ServiceScoreboardItem,
  },
  directives: {
    tooltip: Tooltip,
  },
  setup() {
    const scoreboard = ref<ScoreboardResponse["scoreboard"]>([]);
    const scoreboardError = ref<string>("");

    onMounted(async () => {
      await getScoreboard();
    });

    async function getScoreboard() {
      try {
        const responseScoreboard = await apiFetch<ScoreboardResponse>(
          "/scores/scoreboard"
        );

        scoreboard.value = responseScoreboard.data.scoreboard;
      } catch (error) {
        if (
          error instanceof AxiosError &&
          typeof error.response?.data?.datail === "string"
        ) {
          scoreboardError.value = errors[error.response.data.datail];

          if (scoreboardError.value) return;
        }
        scoreboardError.value =
          "Ошибка при загрузке данных, попробуйте еще раз.";
      }
    }

    return {
      scoreboard,
      serviceClassByStatus,
      scoreboardError,
      cupSizes,
    };
  },
});
</script>
<style lang=""></style>

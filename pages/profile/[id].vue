<template>
  <div
    v-if="user && !profileError"
    class="grid grid-cols-[minmax(180px,_230px)_minmax(900px,_1fr)] gap-8 mt-16"
  >
    <aside class="flex flex-col items-center">
      <img src="/somelogo.png" :alt="`${user.name}`" />

      <div class="mt-5 heading-500 !leading-6">{{ user.name }}</div>
      <div class="body-500 text-[#B0B0B0]">@{{ user.login }}</div>
    </aside>
    <main>
      <div
        v-if="isShowVpnConfig"
        class="bg-[url('/ipcard.png')] rounded-xl py-10 p-6 w-full flex justify-between items-center bg-cover bg-center"
      >
        <div class="heading-800">{{ user.ip }}</div>
        <Button
          :loading="isLoadingConfigButton"
          @click="downloadConfig"
          class="!bg-white !text-black !rounded-lg !border-0 body-500-true"
          label="Download VPN config"
        />
      </div>

      <div
        :class="[
          'grid grid-cols-[repeat(4,_minmax(200px,_1fr))] gap-8',
          { 'mt-10': isShowVpnConfig },
        ]"
      >
        <div class="flex flex-col items-center rounded-lg bg-[#282828] py-5">
          <svg
            width="57"
            height="52"
            viewBox="0 0 57 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.58648 22.7574C3.10436 15.7454 1.3917 11.3943 0.934196 5.8585L0.522095 0.867188H28.6637H56.8053L56.3932 5.8585C55.9357 11.3943 54.223 15.7454 49.7409 22.7574C48.1519 25.2431 46.4678 28.3535 45.9992 29.6701C45.2455 31.7857 44.8551 32.0629 42.6269 32.0629C40.3136 32.0629 39.884 32.4124 37.3946 36.3169L34.6825 40.5708H28.6637H22.6449L19.9327 36.3169C17.4434 32.4124 17.0138 32.0629 14.7005 32.0629C12.4723 32.0629 12.0819 31.7857 11.3282 29.6701C10.8595 28.3535 9.17551 25.2431 7.58648 22.7574ZM14.3896 21.8484C14.1508 21.1047 13.592 17.3555 13.1484 13.5178L12.3417 6.53914H9.58901C6.85867 6.53914 6.83981 6.55828 7.27496 8.84337C7.79742 11.5836 11.3659 18.9302 13.3887 21.428C14.4825 22.7786 14.7207 22.8786 14.3896 21.8484ZM43.9387 21.428C45.9614 18.9302 49.53 11.5836 50.0524 8.84337C50.4883 6.55473 50.4722 6.53914 47.7083 6.53914H44.9256L44.1419 13.5362C43.711 17.3839 43.1661 21.1331 42.9308 21.8669C42.6123 22.8602 42.8693 22.7481 43.9387 21.428ZM14.6942 51.9147V49.0788V46.2428H28.6637H42.6332V49.0788V51.9147H28.6637H14.6942ZM28.9519 10.0552L22.179 13.4417C22.1669 13.4477 22.1554 13.4544 22.1444 13.4617L29.0986 17.132L36.3189 13.5218C36.2907 13.4893 36.2558 13.4621 36.2157 13.4426L29.2382 10.0535C29.1477 10.0096 29.0419 10.0102 28.9519 10.0552ZM22 21.4792V14.1177L28.7708 17.6912V25.4529L22.1658 21.7618C22.0634 21.7046 22 21.5965 22 21.4792ZM36.2287 21.7611L29.4184 25.4581V17.6961L36.398 14.2063V21.4765C36.398 21.5952 36.333 21.7044 36.2287 21.7611Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.58648 22.7574C3.10436 15.7454 1.3917 11.3943 0.934196 5.8585L0.522095 0.867188H28.6637H56.8053L56.3932 5.8585C55.9357 11.3943 54.223 15.7454 49.7409 22.7574C48.1519 25.2431 46.4678 28.3535 45.9992 29.6701C45.2455 31.7857 44.8551 32.0629 42.6269 32.0629C40.3136 32.0629 39.884 32.4124 37.3946 36.3169L34.6825 40.5708H28.6637H22.6449L19.9327 36.3169C17.4434 32.4124 17.0138 32.0629 14.7005 32.0629C12.4723 32.0629 12.0819 31.7857 11.3282 29.6701C10.8595 28.3535 9.17551 25.2431 7.58648 22.7574ZM14.3896 21.8484C14.1508 21.1047 13.592 17.3555 13.1484 13.5178L12.3417 6.53914H9.58901C6.85867 6.53914 6.83981 6.55828 7.27496 8.84337C7.79742 11.5836 11.3659 18.9302 13.3887 21.428C14.4825 22.7786 14.7207 22.8786 14.3896 21.8484ZM43.9387 21.428C45.9614 18.9302 49.53 11.5836 50.0524 8.84337C50.4883 6.55473 50.4722 6.53914 47.7083 6.53914H44.9256L44.1419 13.5362C43.711 17.3839 43.1661 21.1331 42.9308 21.8669C42.6123 22.8602 42.8693 22.7481 43.9387 21.428ZM14.6942 51.9147V49.0788V46.2428H28.6637H42.6332V49.0788V51.9147H28.6637H14.6942ZM28.9519 10.0552L22.179 13.4417C22.1669 13.4477 22.1554 13.4544 22.1444 13.4617L29.0986 17.132L36.3189 13.5218C36.2907 13.4893 36.2558 13.4621 36.2157 13.4426L29.2382 10.0535C29.1477 10.0096 29.0419 10.0102 28.9519 10.0552ZM22 21.4792V14.1177L28.7708 17.6912V25.4529L22.1658 21.7618C22.0634 21.7046 22 21.5965 22 21.4792ZM36.2287 21.7611L29.4184 25.4581V17.6961L36.398 14.2063V21.4765C36.398 21.5952 36.333 21.7044 36.2287 21.7611Z"
              fill="url(#paint0_linear_128_13)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_128_13"
                x1="0.522095"
                y1="0.867187"
                x2="50.303"
                y2="56.3797"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1EC9FF" />
                <stop offset="1" stop-color="#FF35EA" />
              </linearGradient>
            </defs>
          </svg>
          <div class="body-700-true mt-3">{{ userScores?.place }}</div>
          <div class="body-500 text-[#B0B0B0] mt-[1px]">Scoreboard rating</div>
        </div>
        <div class="flex flex-col items-center rounded-lg bg-[#282828] py-5">
          <svg
            width="49"
            height="53"
            viewBox="0 0 49 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.914453 12.2199L23.3957 0.9793C23.6908 0.831736 24.0378 0.829742 24.3346 0.973905L47.4945 12.223C47.6296 12.2886 47.7464 12.3806 47.8401 12.4909L23.8769 24.4725L0.794466 12.2901C0.832571 12.2643 0.872616 12.2408 0.914453 12.2199ZM0.327423 14.4451V38.888C0.327423 39.2727 0.535495 39.6274 0.87133 39.815L22.8019 52.0703V26.3066L0.327423 14.4451ZM24.9258 52.0873L47.5372 39.8125C47.8794 39.6268 48.0925 39.2686 48.0925 38.8792V14.7393L24.9258 26.3227V52.0873Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.914453 12.2199L23.3957 0.9793C23.6908 0.831736 24.0378 0.829742 24.3346 0.973905L47.4945 12.223C47.6296 12.2886 47.7464 12.3806 47.8401 12.4909L23.8769 24.4725L0.794466 12.2901C0.832571 12.2643 0.872616 12.2408 0.914453 12.2199ZM0.327423 14.4451V38.888C0.327423 39.2727 0.535495 39.6274 0.87133 39.815L22.8019 52.0703V26.3066L0.327423 14.4451ZM24.9258 52.0873L47.5372 39.8125C47.8794 39.6268 48.0925 39.2686 48.0925 38.8792V14.7393L24.9258 26.3227V52.0873Z"
              fill="url(#paint0_linear_128_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_128_5"
                x1="0.327423"
                y1="0.867187"
                x2="50.4877"
                y2="48.1772"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1EC9FF" />
                <stop offset="1" stop-color="#FF35EA" />
              </linearGradient>
            </defs>
          </svg>
          <div class="body-700-true mt-3">{{ userScores?.totalScore }}</div>
          <div class="body-500 text-[#B0B0B0] mt-[1px]">Total score</div>
        </div>
        <div class="flex flex-col items-center rounded-lg bg-[#282828] py-5">
          <svg
            width="50"
            height="53"
            viewBox="0 0 50 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.31687 28.7189L14.6342 47.9661L13.2562 49.045C12.4165 49.7023 11.984 50.5071 12.149 51.1041C12.396 51.9982 12.8777 51.9583 17.6107 50.6508C21.9034 49.4648 22.7636 49.08 22.5828 48.4255C22.4626 47.9903 21.4384 47.4682 20.3068 47.2651L18.2494 46.896L16.0346 38.8789L13.8198 30.8622L15.8572 30.6533C19.3331 30.2963 21.6266 30.5009 27.7356 31.7129C34.9689 33.1486 36.9467 33.3043 40.8094 32.7417L43.8283 32.302L41.1645 22.6596L38.5006 13.0173L35.4858 13.5226C33.3058 13.8884 30.2558 13.6294 24.4727 12.5875C16.1079 11.0807 13.1432 10.8858 10.3301 11.6579C8.74762 12.0917 8.61067 12.0065 8.13759 10.2941C7.65702 8.55459 7.54625 8.49138 5.81617 8.96934L3.99941 9.47125L9.31687 28.7189Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.31687 28.7189L14.6342 47.9661L13.2562 49.045C12.4165 49.7023 11.984 50.5071 12.149 51.1041C12.396 51.9982 12.8777 51.9583 17.6107 50.6508C21.9034 49.4648 22.7636 49.08 22.5828 48.4255C22.4626 47.9903 21.4384 47.4682 20.3068 47.2651L18.2494 46.896L16.0346 38.8789L13.8198 30.8622L15.8572 30.6533C19.3331 30.2963 21.6266 30.5009 27.7356 31.7129C34.9689 33.1486 36.9467 33.3043 40.8094 32.7417L43.8283 32.302L41.1645 22.6596L38.5006 13.0173L35.4858 13.5226C33.3058 13.8884 30.2558 13.6294 24.4727 12.5875C16.1079 11.0807 13.1432 10.8858 10.3301 11.6579C8.74762 12.0917 8.61067 12.0065 8.13759 10.2941C7.65702 8.55459 7.54625 8.49138 5.81617 8.96934L3.99941 9.47125L9.31687 28.7189Z"
              fill="url(#paint0_linear_56_138)"
            />
            <circle cx="39.8704" cy="31.1893" r="10.1073" fill="#282828" />
            <circle cx="40.5924" cy="31.9112" r="7.94149" fill="white" />
            <circle
              cx="40.5924"
              cy="31.9112"
              r="7.94149"
              fill="url(#paint1_linear_56_138)"
            />
            <path
              d="M37.7046 31.1893L40.5924 34.0771L44.2021 29.7454"
              stroke="#282828"
              stroke-width="1.06195"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_56_138"
                x1="0.884956"
                y1="10.3317"
                x2="50.3715"
                y2="32.6181"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1EC9FF" />
                <stop offset="1" stop-color="#FF35EA" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_56_138"
                x1="32.6509"
                y1="23.9697"
                x2="48.2308"
                y2="39.7273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1EC9FF" />
                <stop offset="1" stop-color="#FF35EA" />
              </linearGradient>
            </defs>
          </svg>
          <div class="body-700-true mt-3">{{ userScores?.totalGained }}</div>
          <div class="body-500 text-[#B0B0B0] mt-[1px]">Total score</div>
        </div>
        <div class="flex flex-col items-center rounded-lg bg-[#282828] py-5">
          <svg
            width="50"
            height="53"
            viewBox="0 0 50 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.87439 28.719L14.1917 47.9662L12.8137 49.0451C11.974 49.7024 11.5415 50.5072 11.7065 51.1042C11.9535 51.9983 12.4352 51.9584 17.1682 50.6509C21.4609 49.465 22.3212 49.0801 22.1403 48.4257C22.0201 47.9904 20.9959 47.4683 19.8643 47.2653L17.8069 46.8961L15.5921 38.879L13.3774 30.8624L15.4147 30.6534C18.8906 30.2965 21.1841 30.501 27.2931 31.713C34.5264 33.1487 36.5042 33.3045 40.3669 32.7418L43.3858 32.3021L40.722 22.6597L38.0581 13.0174L35.0434 13.5228C32.8633 13.8885 29.8133 13.6295 24.0302 12.5876C15.6654 11.0808 12.7008 10.8859 9.88762 11.658C8.30513 12.0918 8.16819 12.0067 7.69511 10.2943C7.21453 8.55471 7.10377 8.4915 5.37369 8.96946L3.55693 9.47137L8.87439 28.719Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.87439 28.719L14.1917 47.9662L12.8137 49.0451C11.974 49.7024 11.5415 50.5072 11.7065 51.1042C11.9535 51.9983 12.4352 51.9584 17.1682 50.6509C21.4609 49.465 22.3212 49.0801 22.1403 48.4257C22.0201 47.9904 20.9959 47.4683 19.8643 47.2653L17.8069 46.8961L15.5921 38.879L13.3774 30.8624L15.4147 30.6534C18.8906 30.2965 21.1841 30.501 27.2931 31.713C34.5264 33.1487 36.5042 33.3045 40.3669 32.7418L43.3858 32.3021L40.722 22.6597L38.0581 13.0174L35.0434 13.5228C32.8633 13.8885 29.8133 13.6295 24.0302 12.5876C15.6654 11.0808 12.7008 10.8859 9.88762 11.658C8.30513 12.0918 8.16819 12.0067 7.69511 10.2943C7.21453 8.55471 7.10377 8.4915 5.37369 8.96946L3.55693 9.47137L8.87439 28.719Z"
              fill="url(#paint0_linear_129_25)"
            />
            <circle cx="39.4279" cy="31.1894" r="10.1073" fill="#282828" />
            <circle cx="40.1499" cy="31.9112" r="7.94148" fill="white" />
            <circle
              cx="40.1499"
              cy="31.9112"
              r="7.94148"
              fill="url(#paint1_linear_129_25)"
            />
            <path
              d="M37.5373 29.2321L42.6588 34.3536"
              stroke="#282828"
              stroke-width="1.06195"
              stroke-linecap="round"
            />
            <path
              d="M42.6562 29.235L37.5347 34.3565"
              stroke="#282828"
              stroke-width="1.06195"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_129_25"
                x1="0.442474"
                y1="10.3318"
                x2="49.9291"
                y2="32.6182"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1EC9FF" />
                <stop offset="1" stop-color="#FF35EA" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_129_25"
                x1="32.2084"
                y1="23.9697"
                x2="47.7883"
                y2="39.7273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1EC9FF" />
                <stop offset="1" stop-color="#FF35EA" />
              </linearGradient>
            </defs>
          </svg>
          <div class="body-700-true mt-3">{{ userScores?.totalLost }}</div>
          <div class="body-500 text-[#B0B0B0] mt-[1px]">Total score</div>
        </div>
      </div>

      <div class="w-full h-[1px] bg-[#282828] mt-9"></div>

      <div class="mt-9 flex flex-col">
        <div class="heading-400">Services</div>
        <div class="grid grid-cols-2 mt-3 gap-4">
          <ServiceItem v-for="item in services" :item="item" />
        </div>
      </div>
    </main>
  </div>
  <div class="h-full" v-else>
    {{ profileError }}
  </div>
</template>
<script lang="ts">
import { ServiceItem } from "@/components/profile";
import { Service } from "~/types";
import axios, { AxiosError } from "axios";
import Button from "primevue/button";
import { apiFetch, useAuthState } from "~/composables";
import { downloadHelper } from "~~/shared";

interface UserResponse {
  entity: UserDto;
}

interface UserDto {
  created_at: string;
  updated_at: string;
  name: string;
  login: string;
  subnet: string;
  ip: string;
  visible: boolean;
  blocked: boolean;
}

class User {
  createdDate: Date;
  updatedDate: Date;
  name: string;
  login: string;
  subnet: string;
  ip: string;
  visible: boolean;
  blocked: boolean;

  constructor(userDto: UserDto) {
    this.createdDate = new Date(userDto.created_at);
    this.updatedDate = new Date(userDto.updated_at);
    this.name = userDto.name;
    this.login = userDto.login;
    this.name = userDto.name;
    this.ip = userDto.ip;
    this.subnet = userDto.subnet;
    this.visible = userDto.visible;
    this.blocked = userDto.blocked;
  }
}

type ServiceResponse = { services: Service[] };

const errors = {} as Record<string, any>;

interface UserScoresDto {
  total_gained: number;
  total_lost: number;
  total_score: number;
  place: number;
}

class UserScores {
  totalGained: number;
  totalLost: number;
  totalScore: number;
  place: number;

  constructor(scores: UserScoresDto) {
    this.totalGained = scores.total_gained;
    this.totalLost = scores.total_lost;
    this.totalScore = scores.total_score;
    this.place = scores.place;
  }
}

export default defineComponent({
  components: {
    Button,
    ServiceItem,
  },
  setup(props, ctx) {
    const user = ref<User | null>(null);
    const profileError = ref<string | null>(null);
    const services = ref<Service[]>([]);
    const userScores = ref<UserScores | null>(null);
    const authState = useAuthState();
    const isLoadingConfigButton = ref(false);
    onMounted(async () => {
      await getUser();
    });

    const isShowVpnConfig = computed(
      () => user.value?.name === authState.user?.id
    );

    async function getUser() {
      try {
        const userResponse = await apiFetch<UserResponse>("entities/info", {
          params: { name: useRoute().params.id },
        });

        user.value = new User(userResponse.data.entity);

        const servicesResponce = await apiFetch<ServiceResponse>(
          "/entities/services"
        );

        services.value = servicesResponce.data.services.map((item) => ({
          ...item,
          status: `${item.status}`,
        }));

        const userScoresResponse = await apiFetch<UserScoresDto>(
          "/scores/user",
          {
            params: { name: useRoute().params.id },
          }
        );

        userScores.value = new UserScores(userScoresResponse.data);
      } catch (error) {
        if (
          error instanceof AxiosError &&
          typeof error.response?.data?.datail === "string"
        ) {
          profileError.value = errors[error.response.data.datail];
          if (profileError.value) return;
        }
        profileError.value = "Ошибка при загрузке данных, попробуйте еще раз.";
      }
    }

    async function downloadConfig() {
      isLoadingConfigButton.value = true;
      const res = await axios("https://httpbin.org/encoding/utf8", {
        responseType: "blob",
      });
      downloadHelper({ res, fileName: "vpnconfig.ovpn" });
      isLoadingConfigButton.value = false;
    }

    return {
      isShowVpnConfig,
      user,
      profileError,
      services,
      downloadConfig,
      userScores,
      isLoadingConfigButton,
    };
  },
});
</script>

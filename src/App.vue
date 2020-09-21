<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar
        app
        color="#db3725"
        clipped-left
        :short="$vuetify.breakpoint.mdAndUp"
        flat
        dark
      >
        <v-app-bar-nav-icon>
          <v-icon>$appLogo</v-icon>
        </v-app-bar-nav-icon>
        <v-col
          cols="auto"
          sm="6"
          md="10"
          class="flex-grow-1 flex-shrink-0"
        >
          <v-toolbar-title>
            {{ $vuetify.breakpoint.mdAndUp ? "Transcript Processing Application" : "TPA" }}
          </v-toolbar-title>
        </v-col>
        <v-col
          cols="auto"
          sm="6"
          md="2"
          class="flex-grow-0 flex-shrink-1"
        >
          <v-text-field
            hide-details
            dense
            outline
            :prepend-icon="searchIcon"
            single-line
            label="Enter an Id or IRN"
          ></v-text-field>
        </v-col>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        expand-on-hover
        mini-variant
        clipped
        app
      >
        <v-list>
          <v-list-item
            link
            @click="$router.push({ path: '/' })"
          >
            <v-list-item-action>
              <v-icon>{{ dashboardIcon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            link
            @click="$router.push({ path: '/work-queues' })"
          >
            <v-list-item-action>
              <v-icon>{{ queueIcon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Work Queues</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-banner
          app
          :single-line="$vuetify.breakpoint.mdAndUp"
          sticky
          tile
          light
          color="white"
        >
          <v-icon
            slot="icon"
            color="warning"
            size="24"
          >
            fa-exclamation-triangle
          </v-icon>
          Application is a prototype please forgive any errors or missing functionality.
        </v-banner>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row class="fill-height">
            <v-col>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer
        color="#db3725"
        app
      >
        <span class="white--text">
          Copyright &copy; {{ new Date().getFullYear() }} University of Phoenix
        </span>
      </v-footer>
    </v-app>
  </div>
</template>

<style lang="scss">
html {
  overflow-y: auto;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { mdiMagnify, mdiTrayFull, mdiViewDashboard } from '@mdi/js';

export default Vue.extend({
  name: 'App',
  components: {},
  data: () => ({
    drawer: null,
    searchIcon: mdiMagnify,
    queueIcon: mdiTrayFull,
    dashboardIcon: mdiViewDashboard,
  }),
  computed: {
    ...mapGetters('cognito', ['isLoggedIn']),
    ...mapState(['isReady']),
  },
  mounted() {
    this.$logger.info(this.$vuetify.breakpoint);
  },
  watch: {
    isReady(val) {
      if (val && this.isLoggedIn) this.$router.push('/authenticated');
    },
  },
});
</script>

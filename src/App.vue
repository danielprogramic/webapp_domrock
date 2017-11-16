<template>
  <v-app light>
    <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" class="secondary" app>
      <v-list  class="info">
        <v-list-tile v-for="(item, i) in items" :key="i" value="true">
          <v-list-tile-action>
            <v-icon style="color:#fff;" light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="color:#fff;" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary" app>
  
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped">
              <v-icon>web</v-icon>
            </v-btn>
            <v-btn icon @click.stop="fixed = !fixed">
              <v-icon>remove</v-icon>
            </v-btn> -->
      <v-layout row justify-space-between>
        <v-flex xs2 style="margin-top:12px;">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
           <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
        </v-flex>
        <v-flex xs2>
          <center>
            <img src="/static/logo-domrock-nav.png" alt="Dom Rock" />
          </center>
        </v-flex>
        <v-flex xs2 style="margin-top:12px;">
          <v-spacer></v-spacer>
          <div style="float:right;">
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
              <v-icon>menu</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            </br>
             </br>
              </br>
            <img src="/static/logo-domrock.gif" alt="Vuetify.js" />
                </br>
                </br>
            <blockquote>
              &#8220; “Se marcares ao largo um lampejo De um farol a mostrar o caminho, Saberá ser o nosso desejo Que jamais tu navegues sozinho”.&#8221;
              <footer>
                <small>
                      <em>&mdash;Estrofe II, canção do hidrógrafo, Marinha do Brasil</em>
                    </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer temporary fixed :right="right" v-model="rightDrawer" app>
      <v-list>
        <!-- <v-list-tile @click.native="right = !right"> -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Outra opção de sidebar (Inverter)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy;  Copyright 2013 ― Todos os direitos reservados </span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{
          icon: 'branding_watermark',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Dom Rock'
      }
    }
  }
</script>
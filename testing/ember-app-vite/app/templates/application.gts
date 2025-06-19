import { pageTitle } from 'ember-page-title';
import { WelcomePage } from 'ember-welcome-page';

import Greeting from '../components/greeting.gts';

<template>
  {{pageTitle "EmberAppVite"}}

  {{outlet}}

  {{! The following component displays Ember's default welcome message. }}
  <WelcomePage />
  {{! Feel free to remove this! }}

  <Greeting @hello="Hi" @to="Tomster" />
</template>

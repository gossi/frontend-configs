import Component from '@glimmer/component';

import Greeting from './greeting';

export default class Welcome extends Component {
  Greeting = Greeting;

  <template>
    <this.Greeting @hello="Gude" @to="Obi Wan"/>
  </template>
}

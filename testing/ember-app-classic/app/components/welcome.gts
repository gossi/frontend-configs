import Component from '@glimmer/component';

import Greeting from './greeting.gts';

export default class Welcome extends Component {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  Greeting = Greeting;

  <template><this.Greeting @hello="Gude" @to="Obi Wan" /></template>
}

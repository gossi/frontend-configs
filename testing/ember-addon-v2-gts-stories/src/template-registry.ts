import type GreetingComponent from './components/greeting';

export default interface Registry {
  Greeting: typeof GreetingComponent;
}

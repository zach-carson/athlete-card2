import { html } from 'lit';
import '../src/athlete-card2.js';

export default {
  title: 'AthleteCard2',
  component: 'athlete-card2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <athlete-card2
      style="--athlete-card2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </athlete-card2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

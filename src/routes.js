import { StackNavigator } from 'react-navigation';

import Issues from '../src/pages/issues';
import Repositories from '../src/pages/repositories';

const Routes = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },

}, {
  initialRouteName: 'Repositories',
});

export default Routes;

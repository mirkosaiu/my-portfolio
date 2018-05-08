import Loadable from 'react-loadable';
import Loading from 'Components/Loading';



const PersonalProjects = Loadable({
  loader: () => import('./PersonalProjects'),
  loading: Loading,
});

export default PersonalProjects;

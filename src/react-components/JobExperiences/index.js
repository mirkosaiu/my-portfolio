import Loadable from 'react-loadable';
import Loading from 'Components/Loading';



const JobExperiences = Loadable({
  loader: () => import('./JobExperiences'),
  loading: Loading,
});

export default JobExperiences;

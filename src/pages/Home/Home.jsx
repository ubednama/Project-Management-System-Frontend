import { fetchProjects } from '@/redux/Project/Action';
import ProjectList from '../ProjectList/ProjectList'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        console.log("User fetched, dispatching fetchProjects");
        dispatch(fetchProjects({}));
    }, []);
  return (
    <div>
      <ProjectList />
    </div>
  )
}

export default Home

import ProjectCard from "../components/ui/ProjectCard";
import './HomePage.css';

const projects = [
    {
        title: 'Counter',
        description: 'Basic counter with increment/decrement',
        tags: ['useState', 'Components'],
        path: '/counter'

    }
]

function HomePage() {
    return (
        <div className="homepage">
            <h1>React Mini Projects</h1>
            <p className="subtitle">A Collection of 10 React projects for Practice</p>
            <div className="project-grid">
                {projects.map(project => (
                    <ProjectCard key={project.path} {...project}/>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
import {Link} from'react-router-dom';
import './ProjectCard.css';

interface ProjectCardProps{
    title: string;
    description: string;
    path: string;
    tags: string[];
}

function ProjectCard({title, description, path, tags}: ProjectCardProps) {
    return(
        <div className='project-card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='tags'>
                {tags.map(tag => (
                    <span key={tag} className='tag'>{tag}</span>
                ))}
            </div>
            <Link to={path} className='view-btn'>View Project</Link>
        </div>
    )
}

export default ProjectCard
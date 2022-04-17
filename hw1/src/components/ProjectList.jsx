import React from "react";

const ProjectList = ({ projects }) => {
    return (
        <div>
            {(projects.map(p => <img src={p.img} />))}
        </div>
    );
}

export default ProjectList;

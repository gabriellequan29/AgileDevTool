package com.example.ppmtool.services;

import com.example.ppmtool.domain.Project;
import com.example.ppmtool.exceptions.ProjectIdException;
import com.example.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    // create a new project
    public Project saveOrUpdateProject(Project project){
        try{
        project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
        return projectRepository.save(project);
        }catch (Exception exception) {
            throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists");
        }
    }

    // find a project by identifier
    public Project findProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project==null){
            throw new ProjectIdException("Project ID'" +projectId+"' does not exists");
        }

        return project;
    }

    // find all projects
    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    // delete by identifier
    public void deleteProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project == null){
            throw  new  ProjectIdException("Cannot delete project with ID '"+projectId+"'. This project does not exist");
        }

        projectRepository.delete(project);
    }

}


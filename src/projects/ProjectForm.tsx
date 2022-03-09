import React from 'react'

interface ProjectFormProps {
    onCancel: () => void
}

const ProjectForm = ( {onCancel}: ProjectFormProps ) => {
  return (
  <form className="input-group vertical">
    <label htmlFor="name">Project Name</label>
    <input type="text" name="name" placeholder="enter name" />
    <label htmlFor="description">Project Description</label>

    <textarea name="description" placeholder="enter description"></textarea>
    <label htmlFor="budget">Project Budget</label>

    <input type="number" name="budget" placeholder="enter budget" />
    <label htmlFor="isActive">Active?</label>
    <input type="checkbox" name="isActive" />

    <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button type="button" className="bordered medium" onClick={onCancel}>Cancel</button>
    </div>
</form>
  )
}

export default ProjectForm
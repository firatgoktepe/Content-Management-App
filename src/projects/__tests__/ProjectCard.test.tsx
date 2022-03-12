import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Project } from '../Project'
import ProjectCard from '../ProjectCard'
import userEvent from '@testing-library/user-event'
import renderer  from 'react-test-renderer'

describe('<ProjectCard />', () => {
    let project: Project
    let handleEdit: jest.Mock
    beforeEach( () => {
        project = new Project({
            id: 1,
            name: 'Mission Impossible',
            description: 'This is really difficult',
            budget: 100,
        })
        handleEdit = jest.fn()
        
        render(
           <MemoryRouter>
               <ProjectCard project={project} onEdit={handleEdit} />
           </MemoryRouter>
        )
    })

    it('renders project properly', () => {
        expect(screen.getByRole('heading')).toHaveTextContent(project.name)
        //screen.debug(document)
        screen.getByText(/This is really difficult\.\.\./i)
        screen.getByText(/budget : 100/i)
    })

    it('handler called when edit clicked', () => {
        // this query works screen.getByText(/edit/i)
        // but using role is better
        userEvent.click(screen.getByRole('button'))
        expect(handleEdit).toHaveBeenCalledWith(project)
    })

    test('snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <ProjectCard project={project} onEdit={handleEdit} />
            </MemoryRouter>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

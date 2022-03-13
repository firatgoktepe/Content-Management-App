import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../../state'
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectForm from '../ProjectForm';
import { Project } from '../Project';

describe('<ProjectForm />', () => {
    let project: Project
    let updatedProject: Project
    let handleCancel: jest.Mock
    let nameTextBox: any
    let descriptionTextBox: HTMLElement
    let budgetTextBox: HTMLElement

    beforeEach( () => {
        project = new Project({
            name: 'Mission Impossible',
            description: 'This is really difficult',
            budget: 100,
            id: 1
        })
        updatedProject = new Project({
            name: 'Ghost Protocol',
            description: 'Some Text here',
        })
        handleCancel = jest.fn()
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectForm project={project} onCancel={handleCancel} />
                </MemoryRouter>
            </Provider>        
        )
        nameTextBox = screen.getByRole('textbox', {
            name: /project name/i,
        })
        descriptionTextBox = screen.getByRole('textbox', {
            name: /project description/i,
        })
        budgetTextBox = screen.getByRole('spinbutton', {
            name: /project budget/i,
        })
    })

    test('should load project into the form', () => {
        expect(
            screen.getByRole('form', {
                name: /edit a project/i,
            })
        ).toHaveFormValues({
            name: project.name,
            description: project.description,
            budget: project.budget,
            isActive: project.isActive,
        })
    })

})

import React from 'react'
import { 
    render, 
    screen, 
    waitForElementToBeRemoved 
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectsPage from '../ProjectsPage'
import { Provider } from 'react-redux'
import { store } from '../../state'

describe('<ProjectsPage/>', () => {
    function renderComponent() {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectsPage />
                </MemoryRouter>
            </Provider>
        )
    }
    test('should render without crashing', () => {
        renderComponent()
        expect(screen).toBeDefined()
    })
})
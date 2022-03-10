import { Project } from './Project'

const baseUrl = 'http://localhost:4000'
const url = `${baseUrl}/projects`

const translateStatusToErrorMessage = (status: number) => {
    switch (status) {
        case 400:
            return 'Bad Request'
        case 401:
            return 'Unauthorized, Please Login again!'
        case 403:
            return 'Forbidden, You do not have a permisson to view the project(s)!'
        case 404:
            return 'Not Found'
        case 500:
            return 'Internal Server Error'
        default:
            return 'There was an error retrieving the project(s)!. Please try again later.'
    }
}

const checkStatus = (response: any) => {
    if (response.ok) {
        return response
    } else {
        const httpErrorInfo = {
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        }
        console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`)

        let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage)
    }
}

const parseJSON = (response: Response) => {
    return response.json()

}

const delay =  (ms: number) => {
    return function (x: any): Promise<any> {
        return new Promise(resolve => setTimeout(() => resolve(x), ms))
    }
}
const projectAPI = {
  get(page = 1, limit = 20){
    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
    .then(checkStatus)
    .then(parseJSON)
    .catch( (error: TypeError) => {
        console.log('log client error: ', error)
        throw new Error(
            'There was an error retrieving the project(s)!. Please try again later.'
        )
    } )
  },
  put(project: Project){
    return fetch(`${url}/${project.id}`, {
        method: 'PUT',
        body: JSON.stringify(project),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(checkStatus)
    .then(parseJSON)
    .catch( (error: TypeError) => {
        console.log('log client error: ', error)
        throw new Error(
            'There was an error updating the project! Please try again later.'
        )
    } )
  }
}

export { projectAPI }
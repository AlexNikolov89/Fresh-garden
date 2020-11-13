let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://127.0.0.1:8000/backend/api/'
} else {
    baseUrl = 'https://pinocchio.propulsion-learn.ch/backend/api/'
}
export default baseUrl

export default function getBaseUrl() {

    const inDevelopment = window.locate.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/';

}
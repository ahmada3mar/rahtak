import axios from 'axios';

const baseDomain = 'http://localhost:1337';
console.log(window.location.hostname)

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create( {
    baseUrl,
    headers: customHeaders
} );
export default (success: any, error: any) => { 
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(success, error);
    } else {
        return 'Not able to receive geolocation'
    }
}
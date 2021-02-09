export default function httpReducer(httpState, action) {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: null };
        case 'RESPONSE':
            return { ...httpState, loading: false };
        case 'ERROR':
            return { loading: false, error: action.errorData };
        default:
            return {};
    }
}
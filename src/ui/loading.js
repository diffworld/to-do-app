import React from 'react';

export default function LoadingUI({ isLoading = false }) {
    return (
        <div className={(isLoading) ? 'loadingSpiner': ''}></div>
    )
}

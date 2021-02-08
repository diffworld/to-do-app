import React from 'react';

export default function LoadingUI({ isLoading = false }) {
    return (
        <div>
            {(isLoading) ? <p>Loading...</p>: <p></p>}
        </div>
    )
}

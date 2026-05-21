import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (

        <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-4">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>

            <p className="text-gray-600 mt-3 text-lg">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );

};

export default Notfound;
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './Auth.css';

const SignInPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Sign In</h2>
                <SignIn
                    path="/sign-in"
                    routing="path"
                    signUpUrl="/sign-up"
                    appearance={{
                        elements: {
                            formButtonPrimary: 'auth-button',
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default SignInPage; 
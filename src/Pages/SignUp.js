import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '@clerk/clerk-react'; // Assuming you're using Clerk for authentication
import './Auth.css';

const SignUpPage = ({ redirectTo }) => {
    const navigate = useNavigate();
    const { signUp } = useSignUp();

    const handleSignUp = async (event) => {
        event.preventDefault();
        // Perform sign-up logic here
        const result = await signUp(); // Replace with actual sign-up logic

        if (result) {
            navigate(redirectTo); // Redirect to /canvas
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage; 
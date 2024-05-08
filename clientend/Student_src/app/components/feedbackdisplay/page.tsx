"use client";
import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import '../../CSS/FeedbackDisplay.css';

interface Feedback {
    _id: number;
    projectId: string;
    feedback: string;
    createdAt: string;
}

export default function FeedbackTable() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const response = await fetch('http://localhost:3002/feedbacks');
            if (!response.ok) {
                throw new Error('Failed to fetch feedbacks');
            }
            const feedbacksData = await response.json();
            setFeedbacks(feedbacksData);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
        }
    };

    return (
        <>
            <Navigation />
            <div className="feedback-display">
            <h2>Feedbacks</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Project ID</th>
                            <th>Feedback</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map(feedback => (
                            <tr key={feedback._id}>
                                <td>{feedback._id}</td>
                                <td>{feedback.projectId}</td>
                                <td>{feedback.feedback}</td>
                                <td>{new Date(feedback.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

// eslint-disable-next-line import/named
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import React from 'react';
import App from '../App'
import { Register, Login, Health } from '../pages';

describe('App', () => {
    it('should render App component', () => {
        render(<App />);
        const element = screen.getByText('Hello World');
        expect(element).toBeInTheDocument();
    });
    it('Render Register', () => {
        render(<Register />);

        const element = screen.getByText('Register Page!');

        expect(element).toBeInTheDocument();
    })
    it('Render Login', () => {
        render(<Login />);

        const element = screen.getByText('Login Page!');
        expect(element).toBeInTheDocument();
    });
    it('Render Health Endpoint', () => {
        render(<Health />);

        const element = screen.getByText('Health API');

        expect(element).toBeInTheDocument();
    })
})
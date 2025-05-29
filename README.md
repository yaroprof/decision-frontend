# Decision Insight Frontend

The frontend for the AI-Powered Decision Journal, a React-based application enabling users to submit decisions, view personalized history, and receive AI-generated insights. This repository depends on the [Decision Insight Backend](https://github.com/yaroprof/decision-backend.git).

## Features
- **User Authentication**: Register and log in to access personalized features.
- **Decision Submission**: Input decisions with situation, decision, and optional reasoning.
- **Decision History**: Display a chat-like history of decisions with AI analyses.
- **Responsive UX**: Handles loading, error, and retry states.

## Prerequisites
- Node.js (v16.x or higher)
- Modern browser (e.g., Chrome, Firefox)
- [Decision Insight Backend](https://github.com/yaroprof/decision-backend.git) running

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yaroprof/decision-frontend.git
   cd decision-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure the backend is running at `http://localhost:5000` (or your deployed backend URL). Update API requests in the code if needed (e.g., in `axios` calls).

4. Start the frontend:
   ```bash
   npm start
   ```

## Running
- Run `npm start` to launch the app at `http://localhost:3000`.
- Ensure the backend is running to handle API requests.

## Usage
1. **Register/Login**: Go to `/register` or `/login` to create an account or log in.
2. **Submit Decision**: Enter decision details on the main page and click "Analyze."
3. **View History**: Click "Refresh History" to see past decisions and analyses.

## Deployment
- Deploy on Vercel and render.com.
  - Set the backend API URL (e.g., `https://decision-backend.onrender.com`) in API requests.
  - Steps for Vercel:
    1. Push to GitHub.
    2. Import the repository in Vercel.
    3. Configure API URL in the code or environment variables.
- **Demo**: [Add deployed frontend URL here]

## Dependencies
- `react`
- `react-router-dom`
- `axios`

## Project Structure
- `/src`
  - `/components`: React components (`Decision.js`, `Login.js`, `Register.js`)
  - `/App.js`: Main app with routing

## Known Issues
- **CORS**: Ensure the backend allows requests from the frontend's origin (e.g., `http://localhost:3000` or deployed URL).
- **API Connectivity**: Verify the backend URL in API requests.

## Related
- Backend: [Decision Insight Backend](https://github.com/yaroprof/decision-backend.git)

## Contributing
Submit issues or pull requests to improve the project. Discuss major changes via issues first.

## License
MIT License
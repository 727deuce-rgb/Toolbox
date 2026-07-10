import express from 'express';

const router = express.Router();

// GitHub OAuth callback
router.post('/github-callback', (req, res) => {
  const { code } = req.body;
  // TODO: Exchange code for token
  res.json({ message: 'Auth route - implement GitHub OAuth' });
});

// Get current user
router.get('/me', (req, res) => {
  // TODO: Verify JWT and return user
  res.json({ message: 'Get user profile' });
});

export default router;
